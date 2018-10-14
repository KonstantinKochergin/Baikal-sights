import React, { Component } from 'react';
import styled from "styled-components";


const FOOTER = styled.div`
    height: 272px;
    width: 100%;
    background-color: #2E2E2E;
    flex: 0 0 auto;
`;

const UL = styled.ul`
    float: left;
    color: white;
   
`;

const LI1 = styled.li`
     list-style-type: none;
     /*padding-bottom: 40px;*/
     margin-left: 256px;
`;

const LI2 = styled.li`
     list-style-type: none;
     padding-bottom: 40px;
     margin-left: 128px;
`;



const LIhead1 = styled.li`
    font-weight: bold;
    color: white;
    list-style-type: none;
    margin-bottom: 32px;
    margin-top: 16px;
    margin-left: 256px;
`;

const LIhead2 = styled.li`
    font-weight: bold;
    color: white;
    list-style-type: none;
    margin-bottom: 32px;
    margin-top: 16px;
    margin-left: 128px;
`;
class Footer extends Component {

    render() {
        return (
            <FOOTER className="Footer" >
                <UL>
                    <LIhead1>Авторы</LIhead1>
                    <LI1>Константин Кочергин</LI1>
                    <LI1>Евгений Протопопов</LI1>
                    <LI1>Никита Храпов</LI1>
                    <LI1>Рустам Зардов</LI1>
                </UL>
                <UL>
                    <LIhead2>Источники</LIhead2>
                    <LI2><a href="https://ru.wikipedia.org">https://ru.wikipedia.org</a></LI2>
                </UL>
            </FOOTER>
        );
    }

}

export default Footer;
