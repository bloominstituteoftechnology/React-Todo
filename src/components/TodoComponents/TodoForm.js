import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input type="text" id="todoInput" name="todo" placeholder="...todo" onChange={props.inputChange} value={props.todo} />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearTodo}>Clear Completed</button>
    </form>
  )
}

export default TodoForm;