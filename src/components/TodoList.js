import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
  return <Todo todo={props.todo} handleComplete={props.handleComplete} />
}

export default TodoList;

