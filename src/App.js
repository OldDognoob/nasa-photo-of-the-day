
import React, {useState, useEffect} from "react";
import "./App.css";

// IMPORT AXIOS
import axios from "axios";

// FROM COMPONENTS FOLDER
import Title from "../src/Components/Title";
import Image from "../src/Components/Image";
// import ImageInfoContainer from './Components/ImageInfoContainer';
import Description from "../src/Components/Description";
import Date from "../src/Components/Date";
import Copyright from "../src/Components/Copyright";


// IMPORT STYLES
import styled, {keyframes} from 'styled-components';
import {gsap} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";






function App() {

  // SET DECLARATION
  
 

  const[title, setTitle] = useState("");
  const[image, setImage] = useState("");
  const[description, setDescription]   = useState("");
  const[date, setDate]   = useState("");
  const[copyright, setCopyright] = useState("");


  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=1lcdWafxjhVUB8Epio86q1iXiyidsFPzXzpSqFkx")
    .then(response => {
      setTitle(response.data.title);
      setImage(response.data.url);
      setDescription(response.data.explanation);
      setDate(response.data.date);
      setCopyright(response.data.copyright);
      console.log(response.data);
    })
    .catch(response => {
      console.log(response.error);
    })
  }, []);


  
  
  return (
    <Body>
    <div className="App">
      <H1>
      <Title title={title}/>
      </H1>
      <div className="image">
        <Image image={image} alt='NASA POD'></Image>
      </div>
      <P>
      <Description text={description}/>
      </P>
      <H3 className="date">
      <Date date={date}/>
      </H3>
      <FadeInDiv className="copyright">
      <Copyright copyright={copyright}/>
      </FadeInDiv>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.0.5/gsap.min.js"></script>
      <Rotate>&lt; 💅 &gt;</Rotate>
    </div>
  
    </Body>
    
  );
}

export default App;


const H1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  @media(max-width: 500px){
    
  }  
`;

const Body = styled.div`
  width: 85%;
  border: solid 2px white;
  border-radius: 20px;
  margin: 50px auto;
  display: flex;
  align-items: flex-start;
  color: ${props => props.night ? 'red' : 'blue'};
  background:url("https://media.giphy.com/media/3ov9k1173PdfJWRsoE/giphy.gif");
 
 
  
  
  @media(max-width: 500px){
    flex-direction: column;
  }
`;
 const H3 = styled.div`
   padding-left: 3%;
   text-align: center;
   align-content: center;
   padding-top: 5%;
   padding-bottom: 5%;
   color: ${props => props.inputColor || "#44A08D"};
    border: none;
    border-radius: 3px;
    &:hover {
     transform: scale(2);
  }

   @media(max-width: 500px){
    padding-left: initial;
   }

   
 `;
 
 
  const P = styled.div`
    font-size: 1.4rem;
    margin-bottom: 1rem;
    text-align: center;
    align-items: center;
    line-height: 1.8;
    padding: 0px 40px;
    width: 95%;
    color: #FF0099;

  
  `;

const  fadeIn =keyframes`
0% {
  opacity:1.1;
}
100%{
  opacity: 5.1;
}
`;

const FadeInDiv =styled.div`
animation: 3s ${fadeIn} ease-out;


`;

const rotate = keyframes`
from {
  transform rotate(0deg);
}
to {
  transform rotate(360deg);
}

`;

const Rotate = styled.div`
display: inline-block;
animation: ${rotate} 2s linear infinite;
padding: 2rem 1rem;
font-size: 1.2rem
`;