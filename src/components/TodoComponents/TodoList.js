import React from 'react';
import Todo from './Todo';


const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => <Todo todos={ todo } />)}
    </div>
  )
}

export default TodoList;