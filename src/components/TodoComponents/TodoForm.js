import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <div className='inputField'>
      <input type='text' />
      <div className='formButtons'>
      <input type='submit' value='Add To List' />
      <input type='button' value='Clear Complete' />
      </div>
    </div>
  );
};

export default TodoForm;