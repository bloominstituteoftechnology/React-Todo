import React from "react";

const TodoForm = props => {
  //console.log(props);
  return (
    <form>
      <input
        value={props.task}
        onChange={props.handleChanges} // onChange takes in a function definition -- when the user types, React calls the function, and passes in the event -> props.updateName(event)
        placeholder="add new todo"
        type="text"
        task="task"
      />
      <button onClick={props.addTodo}>Add New Todo</button>
    </form>
  );
};

export default TodoForm;
