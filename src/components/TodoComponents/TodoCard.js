import React from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoCard = props => {
  return (
    <div className="todo--card">
      <h2>{props.category}</h2>
      <TodoList
        category = {props.category}
        todoList = {props.todoList}
        filterText = {props.filterText}
        handleClick = {(e, cat, id) => props.handleClick(e, cat, id)}
      />
      <TodoForm
        category = {props.category}
        handleChange = {(e) => props.handleChange(e)}
        addTodo = {(e, cat) => props.addTodo(e, cat)}
        removeCompleted = {(e, cat) => props.removeCompleted(e, cat)}
        inputText = {props.inputText}
      />
    </div>
  );
}

export default TodoCard;