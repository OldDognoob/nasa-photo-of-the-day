
import React, {useState, useEffect} from "react";
import "./App.css";

// IMPORT AXIOS
import axios from "axios";

// FROM COMPONENTS FOLDER
import Title from "../src/Components/Title";
import Image from "../src/Components/Image";
import Description from "../src/Components/Description";
import Date from "../src/Components/Date";
import Copyright from "../src/Components/Copyright";


// IMPORT STYLES
import styled from 'styled-components';



function App() {

  // SET DECLARATION
  
 

  const[title, setTitle] = useState("");
  const[image, setImage] = useState("");
  const[description, setDescription]   = useState("");
  const[date, setDate]   = useState("");
  const[copyright, setCopyright] = useState("");


  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=cVRQJwQRtcNt44mUbf7WnUTJpxm9DahGjBGkoTut")
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
    <body>
    <div className="App">
      <H1>
      <Title title={title}/>
      </H1>
      <div className="image">
        <Image image={image} alt='NASA APOD'></Image>
      </div>
      <p>
      <Description text={description}/>
      </p>
      <h3>
      <Date date={date}/>
      </h3>
      <Copyright copyright={copyright}/>
    </div>
    </body>
  );
}

export default App;


const H1 = styled.h1`
  font-size: 4rem;
  text-align: center;
  @media(max-width: 500px){
    font-size: 3rem;
  }  
`;

const Body = styled.div`
  width: 85%;
  border: solid 2px white;
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
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
   @media(max-width: 500px){
    padding-left: initial;
   }
 `;
 
  const ImageStyle = styled.div`
  width: 75%;
  padding-left: 3%;
  @media(max-width: 500px){
    margin: 0 auto;
    padding-left: initial;
  }
  `;

  const p = styled.div`
    font-size: 4rem;
    margin-bottom: 4rem;
    text-align: center
  
  `;