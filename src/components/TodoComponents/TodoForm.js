import React from 'react';

function TodoForm(props) {
  return(
    <form>
      <input placeholder="...todo" onChange={props.changeInput} />
      <button>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
}

export default TodoForm;