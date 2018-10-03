// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// <TodoList /> receives your Todos array and
//iterates over the list generating a new <Todo /> for each element in the array.

import React from "react";

const TodoList = props => {
  return (
    <div>
      {props.toDoData.map(item => {
        return <p>{item.task}</p>;
      })}

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
    </div>
  );
};

export default TodoList;
