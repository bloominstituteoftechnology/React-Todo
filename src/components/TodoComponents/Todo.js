import React from 'react';

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggle(props.singleTodo.id)}
      style={props.singleTodo.completed ? { textDecoration: 'line-through' } : null}
    >
      {props.singleTodo.task}
      {/* {props.singleTodo.id} */}
    </div>
  );
};
// props.singleTodo.completed evaluates to true or false
// if true then put line through it
// toggle changes is from true
// completed is gonna be to be true by toggling it

export default Todo;
