import React from 'react';
import styled from "styled-components";

const HeaderMiddleText = () => {

    const Container = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      margin: 150px 0px 0px 0px
    `

    const HeaderTitleText = styled.h3`
    font-size: 80px;
      -webkit-text-stroke: 1px #FFFFFF;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 0.5px;
      font-weight: 700;
      
    `

    const HeaderMainText = styled.h1`
    font-size: 100px;
      -webkit-text-stroke: 1px #FFFFFF;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 0.5px;
      font-size: 100px;
      font-weight: 900;
    `

    return (
        <Container>
            <HeaderTitleText>New Single</HeaderTitleText>
            <HeaderMainText>War For Love</HeaderMainText>
        </Container>
    );
};

export default HeaderMiddleText;