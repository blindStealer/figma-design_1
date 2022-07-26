import React from 'react';
import logoText from "../../assets/logo-text.png";
import Logo from "../../assets/logo.png";
import styled from "styled-components";

const Navbar = () => {

    const LogoText = styled.img`
      width: 143px;
      height: 42px;
    `

    const Container = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
      margin-top: 30px;
    `

    const Navbar = styled.div`
      display: flex;
      gap: 65px;
      font-size: 21px;
    `

    const LogotypeInfo = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 35px;

    `

    const ImgLogo = styled.img`
      width: 50px;
      height: 50px;
      
    `

    return (
        <Container>
            <LogotypeInfo>
                <ImgLogo src={Logo}/>
                <LogoText src={logoText} alt="logo-text"/>
            </LogotypeInfo>
            <Navbar>
                <div>About</div>
                <div>News</div>
                <div>Music</div>
                <div>Media</div>
                <div>Tours</div>
                <div>Contacts</div>
            </Navbar>

        </Container>
    );
};

export default Navbar;