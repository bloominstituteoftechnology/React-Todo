import React from 'react';

function TodoForm(props) {
  return (
    <form>
      <input 
        name={props.name} 
        placeholder={'Add todo item'}
        onChange={props.handleChange}
        value={props.inputText}></input>
      <button>press enter</button>
      <button>Clear All</button>
    </form>
    
  );
}

export default TodoForm;