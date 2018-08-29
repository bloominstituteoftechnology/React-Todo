import React from 'react';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

let TodoList = props => {
  console.log(props.todoList)
  return (
    <p> {props.todoList} </p>
/* buscar buen syntax */
/* this.state.todos.map(todo => <Todo task=todo.task id=todo.id completed=todo.completed ) */
/* props.todoList.map(todo => <Todo task=todo.task id=todo.id completed=todo.completed ) */
);
}

export default TodoList
