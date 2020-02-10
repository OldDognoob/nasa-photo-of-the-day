import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Image from "./Image";
import Description from "./Description";
import Title from "./Title";

const DateContainer = styled.div`
    position: fixed;
    top: 50px;
    left: 50px;
    padding: 0.5em;
    margin: 0.5em;
   
`;

const Destination = styled.h2`
    font-size: 17px;
`;


function ImageInfoContainer(){
    const[image, setImage]=useState([]);
    // const[date, setDate] = useState([]);

    useEffect(()=>{
        console.log("Nasa");
    
        axios.get("https://api.nasa.gov/planetary/apod?api_key=1lcdWafxjhVUB8Epio86q1iXiyidsFPzXzpSqFkx")
        .then(res => {
          console.log(res);
          setImage(res.data);
        })
        .catch(error => {
          console.log(`You ran into ${error}`);
        });
      },[]);

      return(
          <>
          <DateContainer>
              <Destination>Destination!</Destination>
          </DateContainer>
          <div className="container">
              <Title
                  title={image.title}
              />
              <Image>
                  image={image.url}
                  </Image>    
              <Description 
                  description={image.analysis}
                  />    
          </div>
        </>

      )
}

export default ImageInfoContainer;