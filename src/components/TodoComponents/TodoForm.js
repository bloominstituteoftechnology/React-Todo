import React from 'react';

const TodoForm = (props) => {
  return (
    <div>
      <input id="taskInput" placeholder="...todo item" />
      <button onClick={props.add}>Add ToDo</button>
      <button onClick={props.clear}>Clear Completed</button>
    </div>
  )
}

export default TodoForm;
