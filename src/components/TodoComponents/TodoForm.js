import React from 'react';

function TodoForm(props) {
  return (
    <form onSubmit={props.addTodo}>
      <input 
        type={'text'}
        name={props.nameInputText} 
        placeholder={'Add todo item'}
        onChange={props.handleChange}
        value={props.inputText}></input>
      <button name={props.inputClicked} type={'submit'}>Submit</button>
      <button onClick={props.clearAll}>Clear All</button>
    </form>
    
  );
}

export default TodoForm;