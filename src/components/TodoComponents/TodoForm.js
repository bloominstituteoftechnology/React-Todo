import React from 'react';

function TodoForm(props) {
  return(
    <form className="form">
      <input value={props.inputText}placeholder="...todo" onChange={props.changeInput} />
      <div className="buttons">
        <button onClick={props.addTodo}>Add Todo</button>
        <button onClick={props.clearComplete} >Clear Completed</button>
      </div>
    </form>
  );
}

export default TodoForm;