import React, { Component } from 'react';
import {numberWithCommas} from '../../action/action';
import Modal from './Modal';

export default class Keranjang extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            keranjangDetail: false,
            jumlah: 0,
            keterangan:''
        }
    }
    
    async ambilData(data){
        await this.setState({
            keranjangDetail:data,
            jumlah:data.jumlah
        })
    }

    tambah=()=>{   
        this.setState({
            jumlah:this.state.jumlah+1
        })
    }
    
    kurang=()=>{
        if(this.state.jumlah !== 1){
            this.setState({
                jumlah:this.state.jumlah-1,
            })
        }
    }
    
    keterangan =async (e)=>{
        await this.setState({
            keterangan:e.target.value
        })
        console.log(this.state.keterangan);
    }

    render() {
        const {keranjang} = this.props;
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
                {this.state.keranjangDetail !==false && <Modal keranjangModal={this.state} tambah={this.tambah} kurang={this.kurang} keterangan={this.keterangan}/>}
            </ul>
        )
    }
}
