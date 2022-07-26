import React from 'react';
import styled from "styled-components";

const CardItem = ({img, content}) => {

    const Card = styled.div`
      -webkit-box-shadow: 10px 10px 230px 65px rgba(107, 72, 107, 1);
      -moz-box-shadow: 10px 10px 230px 65px rgba(107, 72, 107, 1);
      box-shadow: 10px 10px 230px 65px rgba(107, 72, 107, 1);
      border-radius: 35px 0px;
      width: 100%;
    `

    const Container = styled.div`
      position: relative;
    `

    const CardContent = styled.div`
      height: 50px;
      background: rgba(122, 102, 204, 0.7);
      font-size: 15px;
      
    `

    const CardContentWrapper = styled.div`
      text-align: center;
      width: 100%;
      position: absolute;
      bottom: 0px;
    `

    return (
        <Container>
            <Card>
                <img src={img} alt="img"/>
                <CardContentWrapper>
                    <CardContent>{content}</CardContent>
                </CardContentWrapper>
            </Card>
        </Container>
    );
};

export default CardItem;