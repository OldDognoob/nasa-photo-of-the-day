import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

import Title from "../src/Components/Title";
import Image from "../src/Components/Image";
import Text from "../src/Components/Text";
import Date from "../src/Components/Date";





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
      setImage(response.data.img);
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
      <div className= "title">
      <Title title={title}/>
      </div>
      <div className="image">
        <Image image={image} alt='NASA APOD'></Image>
      </div>
      <div className = "text">
      <Text text={text}/>
      </div>
      <div className = "date">
      <Date date={date}></Date>
      </div>
    </div>
  );
}

export default App;
