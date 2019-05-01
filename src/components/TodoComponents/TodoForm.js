import React from "react";

const TodoForm = props => {
  console.log(props);
  return (
    <form onSumbit={props.addStudent}>
      <input
        name="task"
        placeholder="Name of task"
        value={props.task}
        onChange={props.changeHandler}
      />
      <input
        name="id"
        placeholder="Time Stamp"
        value={props.id}
        onChange={props.changeHandler}
      />
      <input
        name="completed"
        placeholder="false"
        value={props.age}
        onChange={props.changeHandler}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
