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
                        key={todo.id}
                        todo={todo} 
                        />
                    </div>  
                </li>
                ))}
        </ul>
    );
}


export default ToDoList;