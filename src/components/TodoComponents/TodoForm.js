//<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
//Your input field should take in user input,
//and allow a user to press Enter or click on the Submit Button to add a todo to your list.
//Once a todo is submitted, the Todo List should re-render and show the added todo.
import React from "react";

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.addToDoHandler}>
        <input
          type="text"
          name="newTask"
          placeholder="...To do"
          onChange={props.changeHandler}
          value={props.newTask}
        />

        <button onClick={props.addNewToDo}>New Todo</button>
        <button>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
