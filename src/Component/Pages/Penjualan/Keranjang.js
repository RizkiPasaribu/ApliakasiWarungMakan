import React, { Component } from 'react';
import {numberWithCommas} from '../../action/action';
import Modal from './Modal';
import axios from 'axios';
import Swal from 'sweetalert2';
import {API_URL} from '../../util/constants';

export default class Keranjang extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            keranjangDetail: false,
            jumlah: 0,
            keterangan:'',
            totalharga:0,
        }
    }
    
    async ambilData(data){
        await this.setState({
            keranjangDetail:data,
            jumlah:data.jumlah,
            totalharga:data.totalharga,
            keterangan:data.keterangan,
        })
    }

    tambah=()=>{   
        this.setState({
            jumlah:this.state.jumlah+1,
            totalharga:this.state.keranjangDetail.product.harga*(this.state.jumlah+1)
        })
    }
    
    kurang=()=>{
        if(this.state.jumlah !== 1){
            this.setState({
                jumlah:this.state.jumlah-1,
                totalharga:this.state.keranjangDetail.product.harga*(this.state.jumlah-1)
            })
        }
    }
    
    keterangan =async (e)=>{
        await this.setState({
            keterangan:e.target.value
        })
    }

    submit = async()=>{
        const data={
            jumlah:this.state.jumlah,
            totalharga:this.state.totalharga,
            keterangan:this.state.keterangan,
            product:this.state.keranjangDetail.product
        }  
        await axios.put(API_URL+"keranjangs/"+this.state.keranjangDetail.id,data)
        .then(() => {
            this.props.cekMasuk();
            Swal.fire({
                icon: 'success',
                title: 'Sukses',
                text: 'Sukses Update Pesanan',
                showConfirmButton:false,
                width:300,
                timer:900
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    HapusP = async(id)=>{
        await axios.delete(API_URL+"keranjangs/"+id)
        .then(() => {
            this.props.cekMasuk();
            Swal.fire({
                icon: 'success',
                title: 'Sukses',
                text: 'Pesanan Dihapus',
                showConfirmButton:false,
                width:300,
                timer:900
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        const {keranjang} = this.props;
        // console.log(this.props)
        return (
            <ul className="list-group">
                {keranjang !== 0 && //cek keranjang seperti menggunakan if statement
                    keranjang.map((data)=> 
                        <li style={{height:'70px'}} key={data.product.id} className="list-group-item">
                            <div className="row">
                                <div className="col-md-2">
                                    <h3 style={{border:'none'}}><span className="badge badge-dark">{data.jumlah}</span></h3>
                                </div>

                                <div className="col-md-6">
                                    <h5>{data.product.nama}</h5>
                                    <p style={{marginTop:'-15px'}}>{"Rp "+numberWithCommas(data.product.harga)}</p>
                                </div>

                                <div className="col">
                                    <h3 style={{border:'none',marginLeft:'-40px'}}>Rp {numberWithCommas(data.totalharga)}</h3>
                                </div>

                                <div>
                                    <button onClick={()=>this.ambilData(data)} type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                }
                {this.state.keranjangDetail !==false && <Modal keranjangModal={this.state} tambah={this.tambah} kurang={this.kurang} keterangan={this.keterangan} hapusPesanan={this.HapusP} submit={this.submit} />}
            </ul>
        )
    }
}
