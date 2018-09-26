import React from "react";

const Button = props => (
    <button {...props}>{props.text}</button>
);

export default Button;