import React from 'react';
import './Todo.css';


const TodoForm = props => {
  return (
    <div className="todo-form-container">
      <form className="todo-form" action="submit" onSubmit={props.addMe}>
        <input 
          className="todo-form__input"
          type="text" 
          placeholder="Enter text" 
          onChange={props.inputChange} 
          value={props.inputValue} 
          required 
        />
        <button className="btn btn-sub" type="submit">Submit</button>
      </form>
      <button className="btn btn-clr" type="submit" onClick={props.clearMe}>Clear Completed</button>
    </div>
  );
}

export default TodoForm;