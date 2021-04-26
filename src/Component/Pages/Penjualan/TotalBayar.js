import React, { Component } from 'react';
import {numberWithCommas} from '../../action/action';

export default class TotalBayar extends Component {
    render() {
        const total = this.props.keranjang.reduce((total,item)=>{
            return total + item.totalharga;
        }, 0)

        return (
            <div style={{marginTop:'70px'}}>
                <h3>Total Harga : <span className="float-right mr-2">Rp {numberWithCommas(total)}</span></h3>
                <button style={{width:'100%'}} type="button" className="btn btn-dark">
                    <i className="fas fa-shopping-cart fa-2x"></i>
                    <span className="h2 ml-2">Bayar</span>
                </button>
            </div>
        )
    }
}

