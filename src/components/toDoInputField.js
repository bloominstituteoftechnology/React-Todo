import React from 'react';

const ToDoInputField = (props) => {
  return <input type="text" value={ props.inputValue } onChange={ props.propsChange } />
};

export default ToDoInputField;
