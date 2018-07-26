import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    
  return  props.todo.map(todo => { return <Todo task = {todo.task} id = {todo.id} click = {props.click}  />});
}

export default TodoList; 