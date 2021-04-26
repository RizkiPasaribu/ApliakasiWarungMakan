import React,{Component} from 'react';
import {API_URL} from '../util/constants';
import axios from 'axios';
import Swal from 'sweetalert2';


import Menu from './Penjualan/Menu';
import Catagories from './Penjualan/Catagories';
import Keranjang from './Penjualan/Keranjang';
import TotalBayar from './Penjualan/TotalBayar';

export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            menus : [],
            pilih : 'Makanan',
            keranjangs:[] 
        }
    }

    //mengatasi pergantian kategori
    changecategori =(value)=>{
        this.setState({
            pilih:value,
            menus:[]
        })

        //ngambil data
        axios.get(API_URL+"products?category.nama="+value)
        .then(response => {
            const menus = response.data;
            this.setState({menus});
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    masukeranjang = (value)=>{
        const keranjang ={
            jumlah:1,
            totalharga:value.harga,
            product:value
        }

        axios.get(API_URL+"keranjangs?product.id="+value.id)
        .then(res => {
            //handle exist item
            if(res.data.length === 0){
                //jika tidak ada tambah data baru
                axios.post(API_URL+"keranjangs",keranjang)
                .then(response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sukses',
                        text: 'Sukses Masuk Keranjang',
                        showConfirmButton:false,
                        width:300,
                        timer:2000
                    })
                })
                .catch(function (error) {
                    console.log(error);
                })
            }else{
                //jika ada data akan di tambah jumlah dan total harga
                const keranjang ={
                    jumlah:res.data[0].jumlah+1,
                    totalharga:res.data[0].totalharga+value.harga,
                    product:value
                }  
                axios.put(API_URL+"keranjangs/"+res.data[0].id,keranjang)
                .then(response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sukses',
                        text: 'Sukses Masuk Keranjang',
                        showConfirmButton:false,
                        width:300,
                        timer:2000
                    })
                })
                .catch(function (error) {
                    console.log(error);
                }) 
            }
        })
        .catch(function (error) {
            console.log(error);
        })

        
    }
    
    //cekk realtime update
    componentDidUpdate(prevState){
        if(this.state.keranjangs !== prevState.keranjang){
            axios.get(API_URL+"keranjangs")
            .then(response => {
                const keranjangs = response.data;
                this.setState({keranjangs});
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }

    componentDidMount(){
        axios.get(API_URL+"products?category.nama="+this.state.pilih)
        .then(response => {
            const menus = response.data;
            this.setState({menus});
        })
        .catch(function (error) {
            console.log(error);
        })

        axios.get(API_URL+"keranjangs")
        .then(response => {
            const keranjangs = response.data;
            this.setState({keranjangs});
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        // console.log(this.state.keranjangs)
        return (
            <div className="container-fluid menus">
                <div className="row">
                    <div className="col-lg-2">
                        <h3>Categories</h3>
                        <Catagories dipilih={this.state.pilih} fungsi={this.changecategori}/>
                    </div>

                    <div className="col-lg-7">
                        <h3>Menu</h3>
                        <Menu fungsi={this.masukeranjang} menus={this.state.menus}/>
                    </div>

                    <div className="col-lg-3">
                        <h3>Pesanan</h3>
                        <Keranjang keranjang={this.state.keranjangs}/>

                        {this.state.keranjangs.length !==0 &&  <TotalBayar keranjang={this.state.keranjangs}/>}
                    </div>
                </div>
            </div>
        )
    }
}
