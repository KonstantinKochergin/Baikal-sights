import React, { Component } from 'react';
import styled from 'styled-components';

import v from './baykal.mp4';

const H1 = styled.h1`
    color: white;
    margin-top: 25%;
    font-size: 4em;
`;

const Wrapper = styled.div`
    background-image: url("images/mainbackground.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    min-height: 100vh;
    vertical-align: middle 
`;





class Header extends Component{


    render(){
        return(
            <Wrapper>
                <H1>ДОСТОПРИМЕЧАТЕЛЬНОСТИ ОЛЬХОНА</H1>

            </Wrapper>
        )
    }
}



export default Header;