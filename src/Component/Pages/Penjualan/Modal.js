import React from 'react';
import {numberWithCommas} from '../../action/action';

export default function Modal(props) {
    let data ={...props.keranjangModal.keranjangDetail};
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title" id="exampleModalLabel">
                            {data.product.nama+" "}
                            <span>
                                ({"Rp "+numberWithCommas(data.product.harga)})
                            </span>
                        </h2>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1"><span className="h3">Total Harga</span></label>
                            <p style={{marginTop:'-10px'}} className="h4">{"Rp "+numberWithCommas(props.keranjangModal.totalharga)}</p>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1"><span className="h4">Jumlah :</span></label>
                            <div className="d-flex">
                                <button onClick={()=> props.tambah()} className="btn btn-dark btn-sm mr-2"><i className="fas fa-plus fa-sm"></i></button>
                                <h4>{props.keranjangModal.jumlah}</h4>
                                <button onClick={()=> props.kurang()} className="btn btn-dark btn-sm ml-2"><i className="fas fa-minus"></i></button>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1"><span className="h3">Keterangan</span></label>
                            <textarea value={props.keranjangModal.keterangan} onChange={(event)=> props.keterangan(event)} name="keterangan" placeholder="Contoh: Pedas" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>                      
                    </div>
                    <div className="modal-footer">
                        <button onClick={()=>props.hapusPesanan(data.id)} type="button" className="btn btn-danger" data-dismiss="modal"><span className="h4"><i className="fas fa-trash-alt mr-2"></i>Hapus Pesanan</span></button>
                        <button onClick={()=>props.submit()} type="button" className="btn btn-success" data-dismiss="modal"><span className="h4">Simpan</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}