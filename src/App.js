import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

import Title from "../src/Components/Title";
import Image from "../src/Components/Image";
import Text from "../src/Components/Text";
import Date from "../src/Components/Date";

import Styles from "../src/Display/Styles";





function App() {


  const[title, setTitle] = useState("");
  const[image, setImage] = useState("");
  const[text, setText]   = useState("");
  const[date, setDate]   = useState("");


  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=cVRQJwQRtcNt44mUbf7WnUTJpxm9DahGjBGkoTut")
    .then(response => {
      setTitle(response.data.title);
      setImage(response.data.imgurl);
      setText(response.data.text);
      setDate(response.data.date);
      console.log(response.data);
    })
    .catch(response => {
      console.log(response.error);
    })
  }, []);


  
  
  return (
    <div className="App">
      <h2>Nasa photo of the day</h2>
      <Container>
        <ImageContainer>
          < Image image={image} />
        </ImageContainer>
        <TextContainer>
          <Title title={title.title}/>
          <Date date={date}/>
        </TextContainer>
      </Container>
    </div>
  );
}


export default App;
