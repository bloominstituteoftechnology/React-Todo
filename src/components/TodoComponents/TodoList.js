// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';


const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => <Todo toggle={props.toggle} todoText={todo.task} value={todo.id} complete={todo.completed} />)}
    </div>
  )
}

export default TodoList;