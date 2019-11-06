import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Image from '../src/Components/Image';
import Title from '../src/Components/Title';
import Text from '../src/Components/Text';
import Date from '../src/Components/Date';



function App() {

  const [data, setData] = useState([]);
  useEffect(() => {

    console.log("render1");
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")

    .then(response =>{
      console.log(response.data);
      setData(response.data);
    });
  }, []);
  



  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
