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
  margin-top: 50px;
  text-align: center;
  color: black;
  background:#ada996;
  

  &:hover {
    transform:scale(1.5)
  }
`;

const ImageTitle = props =>{
    return (
    <H1>{props.title}</H1>
    )
}

export default ImageTitle;