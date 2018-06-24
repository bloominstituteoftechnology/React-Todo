import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <div>
      <form>
        <input
        type="text"
        placeholder="Enter Item"
        onChange={props.changeHandler}
        onSubmit={props.submitHandler}
        value={props.val}/>
        <button onClick={props.submitHandler}>Enter</button>
        <button onClick={props.clearHandler}>Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;
