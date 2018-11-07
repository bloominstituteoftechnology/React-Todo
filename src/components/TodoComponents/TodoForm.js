import React from 'react';

function TodoForm(props) {
  return (
    <form>
      <input onChange={props.handleChange} value={props.inputText}></input>
      <button>press enter</button>
    </form>
    
  );
}

export default TodoForm;