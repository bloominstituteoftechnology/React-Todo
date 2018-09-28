import React from "react";
 import Todo from "./Todo";

 const TodoList = (props) => {
  return( 
    <ul>
        {props.todos.map(current_todo => (
            <Todo 
                ToggleComplete={props.ToggleComplete}
                key={current_todo.id}
                current_todo={current_todo} 
            />))}
        </ul>
    );
};
 export default TodoList;