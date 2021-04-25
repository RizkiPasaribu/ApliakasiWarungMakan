import React, { Component } from 'react';
import {numberWithCommas} from '../../action/action';

export default class Keranjang extends Component {
    render() {
        const {keranjang} = this.props;
        // console.log(keranjang);
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
                                    <h3 style={{border:'none',marginLeft:'-40px'}}>Rp {data.totalharga}</h3>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
        )
    }
}
