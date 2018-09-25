import React from 'react';
 const ToDoForm = (props) => {
  return (
    <form>
      <input type="text" name="todoInput" />
    <button onClick={props.submit}>
      Add Todo
    </button>
  <button>Clear Completed</button>
    </form>
  );
}
 export default ToDoForm;