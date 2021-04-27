import React, { Component } from 'react';
import {numberWithCommas} from '../../action/action';
import axios from 'axios';
import {API_URL} from '../../util/constants';

export default class TotalBayar extends Component {
    //push ke pesanan
    submitTotal = (total)=>{
        const pesanan = {
            totalBayar : total,
            menus:this.props.keranjang
        }

        axios.post(API_URL+"pesanans",pesanan)
        .then(()=>{
            this.props.history.push("/sukses");
        })
        .catch(err=>console.log(err))
    }

    render() {
        const total = this.props.keranjang.reduce((total,item)=>{
            return total + item.totalharga;
        }, 0)

        return (
            <div style={{marginTop:'70px'}}>
                <h3>Total Harga : <span className="float-right mr-2">Rp {numberWithCommas(total)}</span></h3>
                <button onClick={()=> this.submitTotal(total) } style={{width:'100%'}} type="button" className="btn btn-dark">
                    <i className="fas fa-shopping-cart fa-2x"></i>
                    <span className="h2 ml-2">Bayar</span>
                </button>
            </div>
        )
    }
}

