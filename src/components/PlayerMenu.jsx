import React from 'react';
import playIcon from '../assets/play.png'
import styled from "styled-components";
const PlayerMenu = () => {

    const PlayIcon = styled.img`
      width: 18px;
    `

    return (
        <PlayIcon src={playIcon}/>

    );
};

export default PlayerMenu;