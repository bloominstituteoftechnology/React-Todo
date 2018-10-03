import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.addItem}>
      <input
        type="text"
        placeholder="Now what?"
        onChange={props.fillIn}
        value={props.inputText}
        
      />
      <button type="submit" onClick={props.prevent}>Add</button>
    </form>
  );
};

export default Form;
