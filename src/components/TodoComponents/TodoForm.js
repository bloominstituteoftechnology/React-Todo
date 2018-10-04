import React from "react";
import "./Todo.css";

const Form = props => {
  return (
    <div>
      <form onSubmit={props.addItem}>
        <input
          type="text"
          placeholder="Now what?"
          onChange={props.fillIn}
          value={props.inputText}
        />
        <button type="submit">Add</button>
      </form>
      <input
        type="text"
        placeholder="Find task"
        onChange={props.search}
        value={props.inputSearch}
      />
      
    </div>
  );
};

export default Form;
