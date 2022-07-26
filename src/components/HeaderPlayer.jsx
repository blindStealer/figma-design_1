import React from 'react';
import styled from "styled-components";
import PlayerMenu from "./PlayerMenu";
const HeaderPlayer = () => {

    const Container = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      margin-top: 80px;
      justify-content: center;
    `

    const Player = styled.div`
      width: 887px;
      height: 3px;
      background-color: white;
    `

    const Line = styled.div`
      width: 188px;
      height: 3px;
      background-color: red;
      
    `

    return (
        <Container>
            <PlayerMenu/>
            <Player>
                <Line/>
            </Player>
        </Container>

    );
};

export default HeaderPlayer;