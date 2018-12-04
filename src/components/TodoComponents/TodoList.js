// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="list">{props.todos.map( todo => <Todo todo={todo} key={todo.id} todoClick={props.todoClick}/> )}</div>
  );
} 

export default TodoList;