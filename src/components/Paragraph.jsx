import React, { Component } from 'react';
import Slider from "react-animated-slider";
import 'react-animated-slider/build/horizontal.css';
import styled from "styled-components";
import TrackVisibility from "react-on-screen";

const H1 = styled.h1`
    color: #333333;
    font-size: 72px;
    margin-left: 160px;
    font-family: "Roboto";
`;

const P = styled.p`
    margin-top: 64px;
    margin-left: 160px;
    margin-right: 160px;
    margin-bottom: 64px;
    font-size: 24px;
    font-family: "Roboto";
`;

const Wrapper = styled.div`
   min-height: 100vh;
`;

const ComponentToTrack = ({ isVisible,imgs, id }) => {
    /*const style = {
        background: isVisible ? 'red' : 'blue'
    };*/
    /*function f() {
        if(isVisible){
            console.log("visible");
        }
    }*/

    if(isVisible){
        console.log("visible " +id);
        document.location.hash = id;
    }

    return <Slider autoplay={4000} duration={2000} previousButton={""} nextButton={""} >
        {
            imgs.map((img, pos) => (
                <div>
                    <img src={img} key={pos}/>
                </div>
            ))
        }
    </Slider>
}



class Paragraph extends Component {
    render() {
        const { imgs, title, children, id } = this.props;
        return (
            <Wrapper id={id} className= "paragraph">
                <TrackVisibility>
                      <ComponentToTrack imgs={imgs} id={id}/>
                </TrackVisibility>
                <H1>{title}</H1>
                {/*<P>Находится на западной оконечность полуострова Кобылья Голова, и одновременно является самой западной точка острова Ольхон. Самая оконечность мыса откололась от основной части, фактически это изолированная скала, отделенная от острова Ольхон отвесной расщелиной шириной около 4 м. и стенками высотой около 10 м. до самой поверхности воды. Через проход в тихую погоду можно совершенно спокойно пройти на байдарке. Живописные скалы мыса особенно впечатляюще выглядят с воды с северного направления – со стороны пролива Малое Море. Скалистый и обрывистый мыс не пригоден для выпаса животных и жилья. На мысу находится маяк</P>*/}
                <P>{children}</P>
            </Wrapper>
        );
    }

}

export default Paragraph;