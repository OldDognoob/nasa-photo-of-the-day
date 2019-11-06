import React from "react";

function Image(props) {
    const {src}= props;
    <>
    return <img src ={src.url} alt="Nasa A space view!"/>;
    </>
}
export default Image;