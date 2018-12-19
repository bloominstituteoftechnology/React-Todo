import React from 'react';

const Result = props=> {

  return (
    <li identifier = {props.identifier} onClick = {props.listClickFunction}  className = {props.listClass}>{props.content}</li>

  );

};


export default Result;
