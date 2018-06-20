import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <div>
      <form>
        <input
        type="text"
        placeholder="Enter Item"
        onChange={props.handler}
        onSubmit={props.clickHandler}
        value={props.val}/>
        <button onClick={props.clickHandler}>Enter</button>
      </form>
    </div>
  )
}

export default TodoForm;
