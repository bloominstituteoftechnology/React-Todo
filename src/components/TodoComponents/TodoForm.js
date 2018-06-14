import React from 'react';

const TodoForm = (props) => {
  return(
    <form>
      <input type="text" placeholder="Type your todo" onChange={props.onInputChange} onKeyUp={props.onInputEnter} value={props.inputTask} />
      <button onClick={props.onAddClick}>Add Todo</button>
      <button onClick={props.onClearClick}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;