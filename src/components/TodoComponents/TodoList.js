// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import './Todo.css';
const TodoList = props => {
  return (
    <React.Fragment>
      <h1>Todo List: MVP</h1>
      {props.toDoItems.map((itemInMap) => {
        return <Todo 
        key={itemInMap.id} 
        toDoItem={itemInMap} 
        changeStyle={props.changeStyle} 
        />;
      })}
    </React.Fragment>
  );
};

export default TodoList;
