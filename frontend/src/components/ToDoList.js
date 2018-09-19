import React from 'react';
import { ToDo } from "./Form";

const ToDoList = (props) => {
    console.log(props, "props list");
    return( 
        <ul className="task-wrapper">
            {props.todos.map(todo => (
                <li className="task-list">
                    <div className="task-wrapper">
                        <ToDo 
                        handleToggle={props.handleToggle}
                        deleteTodo={props.deleteTodos}
                        todo={todo}
                        id={todo._id} 
                        />
                    </div>  
                </li>
                ))}
        </ul>
    );
}


export default ToDoList;