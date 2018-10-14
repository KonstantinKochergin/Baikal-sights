import React, { Component } from 'react';
import styled from "styled-components";
import TrackVisibility from "react-on-screen";

const DIV = styled.div`
    display: inline-block;
    min-height: 100vh;
    background-image: url("images/mapback3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 100px;
`;

const LIhead1 = styled.li`
    font-family: "Roboto";
    font-size: 48px;
    color: #3B4167;
    list-style-type: none;
    margin-left: 60px;
    margin-top: 52px;
    margin-bottom: 36px;
`;

const LI1 = styled.li`
    font-family: "Roboto";
    color: #3B4167;
    font-size: 24px;
    list-style-type: none;
    margin-left: 90px;
`;

const UL1 = styled.ul`
    display: inline-block;
    width: 40%;
`;

const LIhead2 = styled.li`
    font-family: "Roboto";
    font-size: 48px;
    color: #6F4744;
    list-style-type: none;
    margin-left: 202px;
    margin-top: 52px;
    margin-bottom: 36px;
`;

const LI2 = styled.li`
    list-style-type: none;
    margin-left: 202px;
    font-family: "Roboto";
    color: #6F4744;
    font-size: 24px;
`;

const UL2 = styled.ul`
    display: inline-block;
    width: 40%
`;

const LIhead3 = styled.p`
    font-family: "Roboto";
    color: #201600;
    font-size: 48px;
    margin-left: 60px;
`;

const LI3 =styled.li`
    font-family: "Roboto";
    color: #201600;
    font-size: 24px;
    margin-left: 90px;
`;

const OL3 = styled.ol`
    display: inline-block;
    
`;




class Navigation extends Component {

    render() {
        return (
            <DIV>
                <UL1>
                    <LIhead1>Туристические центры</LIhead1>
                    <LI1>Ялга</LI1>
                    <LI1>Хужир</LI1>
                    <LI1>Харанцы</LI1>
                    <LI1>Халгай</LI1>
                    <LI1>Узуры</LI1>
                </UL1>
                <UL2>
                    <LIhead2>Населенные пункты</LIhead2>
                    <LI2>Хадайская гора</LI2>
                    <LI2>Бурятская деревня</LI2>
                    <LI2>Нюрганская Губа</LI2>
                    <LI2>Падь Узур</LI2>
                </UL2>
                <OL3>
                    <LIhead3>Достопримечательности</LIhead3>
                    <LI3><a href="#1">Мыс Бурхан</a></LI3>
                    <LI3><a href="#2">Мыс Хобой</a></LI3>
                    <LI3><a href="#3">Мыс Хорин - Ирги</a></LI3>
                    <LI3><a href="#4">Мыс Саган - Хушун</a></LI3>
                    <LI3><a href="#5">Мыс Будун</a></LI3>
                    <LI3><a href="#6">Мыс Хорогой и Курыканская стена</a></LI3>
                    <LI3><a href="#7">Озеро Ханхой</a></LI3>
                    <LI3><a href="#8">Озеро Шара - Нур</a></LI3>
                    <LI3><a href="#9">Нюрганская Губа</a></LI3>
                    <LI3><a href="#10">Гора Жима</a></LI3>
                    <LI3><a href="#11">Остров Огой</a></LI3>
                    <LI3><a href="#12">Хаданская гора</a></LI3>
                    <LI3><a href="#13">Падь Идиба</a></LI3>
                    <LI3><a href="#14">Падь Ташкинэй</a></LI3>
                    <LI3><a href="#15">Падь Узур</a></LI3>
                </OL3>
            </DIV>
        );
    }

}

export default Navigation;