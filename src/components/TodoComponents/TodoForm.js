import React from "react";
import "./Todo.css";

const TodoForm = props => {
  //console.log(props);
  return (
    <form>
      <input
        className="text"
        value={props.task}
        onChange={props.handleChanges} // onChange takes in a function definition -- when the user types, React calls the function, and passes in the event -> props.updateName(event)
        placeholder="...add new todo"
        type="text"
        task="task"
      />
      <button className="button" onClick={props.addTodo}>
        Add Todo
      </button>
      <button className="button">Clear</button>
    </form>
  );
};

export default TodoForm;
