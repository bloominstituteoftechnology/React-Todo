import React from 'react';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from './Todo'

let TodoList = props => {
  return (
    <p> {props.todoList.map(
      todo =>
      <Todo
        todo={todo}
        id={todo.id}
        handleClick={props.handleClick}/>)}
      </p>
/* buscar buen syntax */
/* this.state.todos.map(todo => <Todo task=todo.task id=todo.id completed=todo.completed ) */
/* props.todoList.map(todo => <Todo task=todo.task id=todo.id completed=todo.completed ) */
);
}

export default TodoList
