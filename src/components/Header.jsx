import React from 'react';
import styled from "styled-components";
import HeaderImg from "../assets/Header-img.png";
import Navbar from "./Navbar/Navbar";
import HeaderMiddleText from "./HeaderMiddleText";
import HeaderPlayer from "./HeaderPlayer";
import HeaderCards from "./HeaderCards";

const Header = () => {
    const Container = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      color: #FFFFFF;
      
    `
    // почистить этот файл от лишних стилей

    const Header = styled.div`

      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #1C1B21 92.19%), url(${HeaderImg});
      width: 100%;
      height: 1500px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

    `


    return (
        <Container>
            <Header>
                <Navbar/>
                <HeaderMiddleText/>
                <HeaderPlayer/>
                <HeaderCards/>
            </Header>

        </Container>
    );
};

export default Header;