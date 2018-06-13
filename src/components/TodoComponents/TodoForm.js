import React from 'react';

const TodoForm = props => {
  return (
    <input
      type="text"
      onChange={props.addTodo}
      placeholder="enter todo"
      value = {props.todo}
    />
  );
}

export default TodoForm
