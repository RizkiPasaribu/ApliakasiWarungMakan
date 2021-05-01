import React, { Component } from 'react';
import axios from 'axios';
import {API_URL} from '../util/constants';
     
export default class Sukses extends Component {

    // constructor(props) {
    //     super(props)
    
    //     axios.get(API_URL+"keranjangs")
    //     .then((response) => {
    //         const keranjangs = response.data;

    //         keranjangs.map(function(item,i){
    //             axios.delete(API_URL+"keranjangs/"+item.id)
    //             .catch(err=>console.log(err))
    //             .then(()=>{
    //                 document.querySelector('.hide').classList.add('show');
    //             })
    //         })
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // }
    

    async hapus(){
        await axios.get(API_URL+"keranjangs")
        .then((response) => {
            // console.log(response.data.length);
            const keranjangs = response.data;
            keranjangs.map(async (item)=>{
                await axios.delete(API_URL+"keranjangs/"+item.id)
                .catch(err=>console.log(err))

                console.log(item.length)
            })
            document.querySelector('.sembunyi').classList.remove('sembunyi');
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        this.hapus();
        return (
            <div className="text-center">
                <img alt="gambar-sukses" style={{marginLeft:'100px'}} width="300px" height="300px" src="Assets/Confirm-UnDraw.png"></img>
                <h1>Sukses</h1>
                <p>
                    Terimakasih Teleh Memesan Makanan Kami
                </p>
                <a href="/" className="btn btn-success sembunyi" role="button">Kembali</a>
            </div>
        )
    }
}
