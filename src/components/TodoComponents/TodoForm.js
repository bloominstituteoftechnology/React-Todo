import React from "react";
import './Todo.css';

const Form = props => {
  return (
    <form onSubmit={props.addItem}>
      <input
        type="text"
        placeholder="Now what?"
        onChange={props.fillIn}
        value={props.inputText}
        
      />
      <button type="submit">Add</button>
    </form>
    
  );
};

export default Form;
