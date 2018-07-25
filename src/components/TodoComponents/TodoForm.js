import React from 'react';
import './Todo.css';


const TodoForm = props => {
  return (
    <div>
      <form action="submit" onSubmit={props.addMe}>
        <input type="text" placeholder="submit" />
        <button type="submit">Submit</button>
      </form>
      <button type="submit" onClick={props.clearMe}>Clear All</button>
    </div>
  );
}

export default TodoForm;