import React from 'react';

const TodoForm = TodoFormProps => {
  return (
    <form>
      <input placeholder="type new taks" onChange={TodoFormProps.handleInput}></input>
      <button onClick={TodoFormProps.handleButton}>Add Todo</button>
    </form>
  )
}

export default TodoForm;
