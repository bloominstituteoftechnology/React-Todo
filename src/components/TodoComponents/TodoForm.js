import React from 'react';

function TodoForm(props) {
  return (
    <form onSubmit={props.addTodo}>
      <input 
        type={'text'}
        name={props.nameInputText} 
        placeholder={'...Todo'}
        onChange={props.handleChange}
        value={props.inputText}></input>
      <button name={props.inputClicked} type={'submit'}>Add Todo</button>
      <button onClick={props.clearAll}>Clear Completed</button>
    </form>
    
  );
}

export default TodoForm;