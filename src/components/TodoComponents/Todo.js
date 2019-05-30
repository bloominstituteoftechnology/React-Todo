import React from "react";

const todo = props => {
  const style = {
    textDecoration: props.strike ? 'line-through' : 'none'
  }
  return (
    <>
      <li onClick={props.click} style={style}>{props.task} </li>
    </>
  );
};

export default todo;
