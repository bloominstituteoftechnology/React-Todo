import React from 'react';
import Todo from './Todo';
import './Todo.css';


const TodoList = props => {
  return (
    <Todo listItem={props.itemProp} crossMe={props.crossItem} />
  );
}

export default TodoList;