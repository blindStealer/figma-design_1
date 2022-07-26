import React from 'react';
import styled from "styled-components";
import HeaderCard_1 from '../assets/HeaderCard_1.png'
import HeaderCard_2 from '../assets/HeaderCard_2.png'
import HeaderCard_3 from '../assets/HeaderCard_3.png'

import CardItem from "./CardItem";

const CardItems = () => {


    const cards = [
        {
            cardNumber: HeaderCard_1,
            cardContent: 'Working on my upcoming full-lenth album thats releasing later this year.'

        },

        {
            cardNumber: HeaderCard_2,
            cardContent: `Halloween vibes. Listen my new track!`
        },

        {
            cardNumber: HeaderCard_3,
            cardContent: 'WarForLove is OUT NOW!!Stream it here!'

        }
    ]

    const Container = styled.div`
      display: flex;
      justify-content: center;
      margin-top: 150px;
      gap: 50px;

    `


    return (
        <Container>
            {
                cards.map((item) =>{
                    return <CardItem img={item.cardNumber} content={item.cardContent}/>
                })
            }
        </Container>
    );
};

export default CardItems;