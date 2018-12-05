import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <form>
      <input placeholder="What to do?"></input>
      <button onClick={console.log("click!")}>Add Item</button>
    </form>
  )
}

export default TodoForm
