import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input type="text" placeholder="...todo" onChange={props.inputChange} />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearTodo}>Clear Completed</button>
    </form>
  )
}

export default TodoForm;