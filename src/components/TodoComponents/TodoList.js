// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    console.log(props.TodoData);
    return (
      <div>
        
        {props.todo.map(todoInMap => (
            <Todo 
            key={todoInMap.id}
            todoOnProps={todoInMap}
            changeTaskStatus={props.changeTaskStatus} />
        ))}
      </div>
    );
  };


export default TodoList;
