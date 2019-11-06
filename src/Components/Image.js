import React from 'react';


function Image(props) {

    return (
        <div className = 'image'>
        <img src={props.imgUrl} alt='NASA APOD'  ></img>;
        </div>
    )
    
    }
    
    export default Image;