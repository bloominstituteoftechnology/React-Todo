import React from 'react';
import Todo from './Todo';
import './Todo.css';


const TodoList = props => {
  return (
    <div className="todo-list__item-container">
      <Todo listItem={props.itemProp} crossMe={props.crossItem} />
    </div>
  );
}

export default TodoList;