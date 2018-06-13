import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input type="text" placeholder={props.displayText} onChange={props.changeEvent} />
      <button onClick={props.handler}>Add</button>
      <button>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
