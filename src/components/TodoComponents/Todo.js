import React from 'react';

const Todo = props=> {

  return (
    <li identifier = {props.identifier} onClick = {props.listClickFunction}  className = {props.listClass}>{props.content}</li>

  );

};


export default Todo;
