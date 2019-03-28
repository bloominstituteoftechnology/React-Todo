import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return(
        <div className= 'todo-list'>
        <h1>Hi I am the todo-list</h1>
        {props.todos.map(todos => (
            <Todo 
             key={todos.id} 
             todos={todos}
             />
        ))}
       
        
        </div>
    );
}



export default TodoList;