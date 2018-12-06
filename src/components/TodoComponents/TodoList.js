// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
  return props.todoList.map(entry => {
    return <Todo clickHandler={props.clickHandler} listItem={entry.task} key={entry.id} />
  })
}

export default TodoList;
