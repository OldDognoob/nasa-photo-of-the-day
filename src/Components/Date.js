import React from "react";

function Date(props) {
    const {dateTime, nightTime, moonWalking} =props;

    return (
        <time dateTime = {dateTime} time nightTime = {nightTime}>
            {moonWalking}
        </time>
    );
}
export default Date;