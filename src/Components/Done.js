import React, { Component } from "react";

const Done = props => {
    // this is reading state
    return (
        <div>
            {props.done.map((item, index) => {
                <div onClick={props.method} key={item + index}>{item}</div>
            })}
        </div>
    );
};

export default Done;