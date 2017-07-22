import React, { Component } from 'react';

const ToDoInputField = (props) => {
  return <input type="text" value={ props.inputValue } onChange={ props.change } />
};

export default ToDoInputField;
