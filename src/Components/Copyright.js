import React from "react";
import styled, {keyframes} from "styled-components";

function Copyright(props) {
  return <div className="copyright">Copyright {props.copyright}</div>
}

const  fadeIn =keyframes`
  0% {
    opacity:1.1;
  }
  100%{
    opacity: 2.1;
  }
`;

const FadeInDiv =styled.div`
 animation: 1s ${fadeIn} ease-out;


`;



export default Copyright