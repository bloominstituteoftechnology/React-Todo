import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    return (
        <ul>
          {props.list.map(item => (
            // <li key={item.id}>{item.task}</li>
            <Todo key={item.id} task={item.task}/>
          ))}
        </ul>
    );
}


export default TodoList;
