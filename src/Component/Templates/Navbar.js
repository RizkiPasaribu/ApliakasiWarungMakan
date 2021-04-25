import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function active(e){
    const hapusactive = document.querySelectorAll('.nav-link');
    hapusactive.forEach(e => {
        e.classList.remove('active')
    });
    if(e.target.className === "nav-link"){
        e.target.classList.add("active")
    }
}

function Navbar() {
    return (
        <Nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <div className="container">
                <Link className="navbar-brand font-weight-bold" to="/">Ryu-DEV</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div onClick={(e)=>active(e)} className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-1">
                            <Link className="nav-link active" to="/">HOME&nbsp;<i className="fas fa-home"></i></Link>
                        </li>
                        <li className="nav-item ml-1">
                            <Link className="nav-link" to="/about">ABOUT&nbsp;<i className="fas fa-address-card"></i></Link>
                        </li>
                        <li className="nav-item ml-1">
                            <Link className="nav-link"to="/notfound">COMINGSOON</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Nav>
    )
}

export default Navbar;

const Nav = styled.nav`
    .navbar-brand{
        font-size: 30px;
    }
`;