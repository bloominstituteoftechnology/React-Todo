import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input type="text" placeholder={props.displayText}
                         onChange={props.changeEvent} />
      <button type="submit" onClick={props.handler} >Add</button>

      <button onClick={props.clearTodo}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
