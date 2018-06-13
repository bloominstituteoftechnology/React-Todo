// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";


const TodoList = props => {
    return (  
        <ul className="todo__item">
        {props.todoList.filter(list => (!list.completed)).map((list, i) => {
            return <Todo  key={list.id} todo={list.task} />
        })}
    </ul>
    );
  };
  
  export default TodoList;