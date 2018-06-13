import React from 'react';
import './Todo.css';

const TodoList = props => {
  return (
    <ul>
      {props.listItems.map( addList => {
        return <li key={Date.now()}>{addList}</li>
      })}
    </ul>   
  )
}

export default TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
