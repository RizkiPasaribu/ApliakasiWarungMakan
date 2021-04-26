import React from 'react';

function Sukses() {
    return (
        <div className="text-center">
            <img alt="gambar-sukses" style={{marginLeft:'100px'}} width="300px" height="300px" src="Assets/Confirm-UnDraw.png"></img>
           <h1>Sukses</h1>
           <p>
               Terimakasih Teleh Memesan Makanan Kami
           </p>
           <a className="btn btn-success" href="/" role="button">Kembali</a>
        </div>
    )
}

export default Sukses;