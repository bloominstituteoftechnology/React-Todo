import React from 'react';
import Todo from './Todo';
import './Todo.css';


const TodoList = props => {
  return (
    <div className="todo-list__item-container">
      <Todo inputValue={props.inputValue} crossTodo={props.crossTodo} className={props.className} />
    </div>
  );
}


export default TodoList;