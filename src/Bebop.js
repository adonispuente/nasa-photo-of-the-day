import React from "react";
import "./App.css";
import styled from "styled-components";
import img from "./img/usa.png";
import img2 from "./img/NASALogo.png";
const Background = styled.section`
  background-image: url(${img});
  width: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
`;

const Header = styled.img`
  width: 25%;
  margin: 0 auto;
`;

const Wrapper = styled.section`
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 2rem;
  margin: 0 auto;
  color: White;
  font-family: "Anton";
`;
const Paragraph = styled.p`
  margin: 0 auto;
  font-size: 1.5rem;
  color: white;
  font-family: "Oswald";
`;

const Pic = styled.img`
  height: 500px;
  width: 75%;
  margin: 0 auto;
  border: 10px solid white;
`;
function Bebop(nasa) {
  return (
    <Background>
      <Header src={img2} />
      <Wrapper>
        <Title>{nasa.title}</Title>
        <Paragraph>{nasa.date}</Paragraph>
        <Pic src={nasa.imgUrl} alt="Picture of the day"></Pic>
        <Paragraph>{nasa.explanation}</Paragraph>
      </Wrapper>
    </Background>
  );
}

export default Bebop;
