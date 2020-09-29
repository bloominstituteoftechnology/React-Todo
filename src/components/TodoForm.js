import React, { useState } from "react";

const TodoForm = (props) => {
  const [inputVal, setInputVal] = useState("");
  const onInputChange = (e) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = () => {
    console.log(inputVal);
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
        <button>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
