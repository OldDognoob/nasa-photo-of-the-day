import React from 'react';

import logo from "../Img/main_image.jpg";

console.log(logo);

function Image(props) {

    return (
        <div className = 'image'>
        <img src={logo} alt='NASA APOD'  ></img>;
        </div>
    )
    
    }
    
    export default Image;

   