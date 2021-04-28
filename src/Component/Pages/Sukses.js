import React, { Component } from 'react';
import axios from 'axios';
import {API_URL} from '../util/constants';
     
export default class Sukses extends Component {

    constructor(props) {
        super(props)
    
        axios.get(API_URL+"keranjangs")
        .then((response) => {
            const keranjangs = response.data;

            keranjangs.map(function(item,i){
                axios.delete(API_URL+"keranjangs/"+item.id)
                .catch(err=>console.log(err))
                .then(()=>{
                    document.querySelector('.hide').classList.add('show');
                })
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    

    // componentDidMount(){
    //     axios.get(API_URL+"keranjangs")
    //     .then((response) => {
    //         const keranjangs = response.data;
    //         keranjangs.map(async (item)=>{
    //             await axios.delete(API_URL+"keranjangs/"+item.id)
    //             .catch(err=>console.log(err))
    //         })
    //         document.querySelector('.hide').classList.remove('hide');
    //         document.querySelector('.hide').classList.add('show')
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // }

    render() {
        // console.log(this.props)
        return (
            <div className="text-center">
                <img alt="gambar-sukses" style={{marginLeft:'100px'}} width="300px" height="300px" src="Assets/Confirm-UnDraw.png"></img>
                <h1>Sukses</h1>
                <p>
                    Terimakasih Teleh Memesan Makanan Kami
                </p>
                <a href="/" className="btn btn-success hide" role="button">Kembali</a>
            </div>
        )
    }
}
