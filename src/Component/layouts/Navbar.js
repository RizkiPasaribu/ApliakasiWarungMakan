import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">
                <Link className="navbar-brand font-weight-bold" to="/home">Ryu-Def</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-1">
                            <Link className="nav-link" to="/">HOME&nbsp;<i className="fas fa-home"></i></Link>
                        </li>
                        <li className="nav-item ml-1">
                            <Link className="nav-link" to="/about">ABOUT&nbsp;<i className="fas fa-address-card"></i></Link>
                        </li>
                        <li className="nav-item ml-1">
                            <a className="nav-link">COMINGSOON</a>
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