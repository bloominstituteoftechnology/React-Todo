// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    console.log(props.TodoData);
    return (
      <div>
        <h1>yo yo yo</h1>
        {props.todo.map(todoInMap => (
            <Todo key={todoInMap.task}

            
            todoOnProps={todoInMap} />
        ))}
      </div>
    );
  };


export default TodoList;
