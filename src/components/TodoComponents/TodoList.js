// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo.js';

const TodoList = props => {
  return (
    <ul>{props.list.map( item => {
      return <Todo item={item} />
    })}
    </ul>
  )
}

export default TodoList;
