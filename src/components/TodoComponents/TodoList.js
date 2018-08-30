import React from "react";
import ToDo from "./Todo";

////This component will print the list 

function ToDoList(props){
    return<ul>
    {props.todos.map((todo) => <ToDo todo={todo} key={todo.id} completed={todo.completed} />)} 
    </ul>
}

export default ToDoList;