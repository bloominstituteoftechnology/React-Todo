import React from 'react';
import './Todo.css';

const Form = (props) => {
  return (

    <form onSubmit={props.addNewTask}>
      <input
        type="text"
        name="newTask"
        onChange={props.changeHandler}
        value={props.value}
      />
      <button type="submit" onClick={props.addNewTask}>
        Add New Task
      </button>
    </form>
  )
}

export default Form;