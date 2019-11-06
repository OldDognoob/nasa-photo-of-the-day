import React from "react";

function Text(props) {
    const {spaceshuttle, ...spaceMoving} = props;

    return < p {...spaceMoving}>{spaceShuttle}</p>;
}
export default Text;