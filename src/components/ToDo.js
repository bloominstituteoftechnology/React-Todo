import React, { Component } from 'react';

function ToDo(props) {
  return(
    <h4 key={props.key}>{props.task}</h4>
  );
}

export default ToDo