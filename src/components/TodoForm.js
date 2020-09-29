import React, { useState } from "react";

const TodoForm = (props) => {
  const [inputVal, setInputVal] = useState("");
  const onInputChange = (e) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewTodo(inputVal);
    setInputVal("");
  };
  const onClearClick = (e) => {
    props.clearCompleted();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="string"
          name="todo"
          value={inputVal}
          placeholder="...todo"
          onChange={onInputChange}
        />
        <button>Add Todo</button>
        <button onClick={onClearClick}>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
