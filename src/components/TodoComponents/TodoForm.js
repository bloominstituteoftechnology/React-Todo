import React from 'react';

const TodoForm = props => {
    console.log(props)
  return (
    <form>
      <input
        type="text"
        name="todo"
        value={props.inputText}
        onChange={props.handleChanges}
        placeholder="THINGS I GOT 2 DO"
      />
      <button onClick={props.addToDo}>Add Todo</button>
      <button onClick={props.clearComplete}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;