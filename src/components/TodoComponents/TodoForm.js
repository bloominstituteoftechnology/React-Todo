import React from 'react';

function TodoForm(props) {
  return(
    <form>
      <input value={props.inputText}placeholder="...todo" onChange={props.changeInput} />
      <button onClick={props.addTodo}>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
}

export default TodoForm;