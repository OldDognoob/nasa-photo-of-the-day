import React from "react";
import styled from 'styled-components';

function NasaImage(props) {
  return (
    <ImageDiv>
      <img src={props.image} alt="NASA APOD"></img>
    </ImageDiv>
  );
}

export default NasaImage

const ImageDiv = styled.div`
  img {
    max-width: 700px;
    max-height: 500px;
    margin: 25px;
    border-radius: 40px;
    box-shadow: 0px 0px 40px 20px blueviolet;
    border: solid 2px white;
    @media(max-width: 500px){
      max-width: 100%;
    }
  }
`;

   