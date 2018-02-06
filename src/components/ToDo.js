import React from 'react';
// import ToDoList from './ToDoList'

function ToDo(props) {
  return(
    <h4 key={props.key}>{props.task}</h4>
  );
}

export default ToDo