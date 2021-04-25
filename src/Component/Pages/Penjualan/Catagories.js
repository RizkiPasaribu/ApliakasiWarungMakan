import React, { Component } from 'react';
import {API_URL} from '../../util/constants';
import axios from 'axios';

export default class Catagories extends Component {
    awalactive(props){
        if(props === "Makanan") return "active"
    }
    //handle logo font awesomes
    Icon = (nama) =>{
        if (nama === 'Makanan') return <i className="fas fa-utensils mr-2"></i>
        if (nama === 'Minuman') return <i className="fas fa-coffee"></i>
        if (nama === 'Cemilan') return <i className="fas fa-cookie mr-1"></i>
    }

    //ngatasi class avtive
    async active(e,nama){
        //await agat tidak bug this.props.dipilih
        await this.props.fungsi(nama)

        const hapusactive = document.querySelectorAll('.list-group-item');

        hapusactive.forEach(e => {
            e.classList.remove('active')
        });
        e.target.classList.add("active");
    }

    constructor(props) {
        super(props)
        
        this.state = {
            categories : [],
        }
    }
    
    componentDidMount(){
        axios.get(API_URL+"categories")
        .then(response => {
            const categories = response.data;
            this.setState({categories});
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        const {categories} = this.state;//destructerring
        return (
            <ul className="list-group" style={{cursor: 'pointer'}}>
                {categories.map((data)=>
                    <li onClick={(e)=>this.active(e,data.nama)} key={data.id} className={"list-group-item mt-0 mb-0 "+ this.awalactive(data.nama)}> {data.nama}</li>
                )}
            </ul>
        )
    }
}
