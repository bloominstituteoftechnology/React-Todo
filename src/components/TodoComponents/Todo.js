import React from 'react';

const Todo = props => {
  const completed = props.todo.completed ? 'completed-todo' : '';
  const todoClasses = `todo ${completed}`;
  return (
    <div className={todoClasses} onClick={() => props.onToggleComplete(props.todo.id)} onMouseDown={props.onMouseDown}>
      {props.todo.task}
    </div>
  );
}

export default Todo;
