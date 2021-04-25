import React from 'react';
import styled from 'styled-components';


function Footer() {
    return (
        <FooterContainer className="mt-4">
            <div className="main-Footer">
                <div className="container text-center">
                    <div className="socialMedia">
                        <a href="https://www.instagram.com/rizki_pasaribu12/"><i className="fab fa-instagram fa-3x mt-4"></i></a>
                        <a href="https://github.com/RizkiPasaribu"><i className="fab fa-github fa-3x"></i></a>
                        <a href="https://www.facebook.com/rizkipasariboe/"><i className="fab fa-facebook-square fa-3x"></i></a>
                    </div>
                    
                    <div className="mt-2 font-weight-bold">
                        ©{new Date().getFullYear()} RIZKI ALI AKBAR PASARIBU
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.section`
    .main-Footer{
        padding:10px;
        height: 140px;
        background:  rgba(151, 151, 151, 0.829);
    }

    a,.font-weight-bold{
        color: white;
        margin-left:10px;
    }
`;