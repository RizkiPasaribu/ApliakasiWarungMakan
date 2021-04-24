import React,{Component} from 'react';
import {API_URL} from '../util/constants';
import axios from 'axios';


import Menu from './Penjualan/Menu';
import Catagories from './Penjualan/Catagories';

export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            menus : [],
            pilih : 'Makanan'
        }
    }

    //handle pergantian kategori
    changecategori =(value)=>{
        this.setState({
            pilih:value,
            menus:[]
        })

        axios.get(API_URL+"products?category.nama="+value)
        .then(response => {
            const menus = response.data;
            this.setState({menus});
        })
        .catch(function (error) {
            console.log(error);
        })
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
    }

    test(){
        console.log('ok')
    }

    render() {
        // console.log(this.state.menus)
        return (
            <div className="container-fluid menus">
                <div className="row">
                    <div className="col-lg-2">
                        <h3>Categories</h3>
                        <Catagories dipilih={this.state.pilih} fungsi={this.changecategori}/>
                    </div>

                    <div className="col-lg-7">
                        <h3>Menu</h3>
                        <Menu menus={this.state.menus}/>
                    </div>

                    <div className="col-lg-3">
                        <h3>pesanan</h3>
                    </div>
                </div>
            </div>
        )
    }
}
