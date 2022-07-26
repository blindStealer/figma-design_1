import React from 'react';
import styled from "styled-components";
import CardItems from "./CardItems";
const HeaderCards = () => {

    const Container = styled.div`
      width: 100%;
      
    `

    return (
        <Container>
            <CardItems/>
        </Container>
    );
};

export default HeaderCards;