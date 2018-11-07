import React from "react";
// import '.Todo.css';

const TodoForm = props => {
  return (
    //
    <div className="form">
      <input
        type="text"
        placeholder="put something in your list!"
        onChange={props.onChange}
      />
      <button onClick={props.onSubmit}> Add </button>
      <button> Clear </button>
    </div>
  );
};

export default TodoForm;
