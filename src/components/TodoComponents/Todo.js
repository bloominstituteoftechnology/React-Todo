import React from 'react';

const Todo = props => {
  return (
    <div onClick={() => props.toggleCompleted(props.todo.id)} className={props.todo.completed ? "todo completed" : "todo"}>
      {props.todo.task}
    </div>
  );
};

export default Todo;