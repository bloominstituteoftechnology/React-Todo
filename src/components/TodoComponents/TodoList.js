import React from "react";
import ToDo from "./Todo"

////This component will print the list 

function ToDoList(props){
    return<ul>{props.todo.map(todo => <ToDo todo={todo} />)} </ul>
}

export default ToDoList;