// import React from "react";

// function Title(props) {

//     return (
//         <div className='title'>
//             <h2> {props.title}</h2>
//         </div>
//     );
//     }
    
//     export default Title
    
  

import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 25px;
  text-align: center;
  color: black;
`;

const ImageTitle = props =>{
    return (
    <H1>{props.title}</H1>
    )
}

export default ImageTitle;