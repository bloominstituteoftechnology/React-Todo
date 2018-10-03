import React from 'react';
import './Todo.css';

const Form = (props) => {
  return (

    <form onSubmit={props.addNewtask}>
      <input
        type="text"
        name="newTask"
        onChange={props.changeHandler}
        value={props.newTask}
      />
      <button type="submit" onClick={props.addNewtask}>
        Add New Task
      </button>
    </form>
  )
}

export default Form;