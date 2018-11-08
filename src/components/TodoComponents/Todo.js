import React from 'react';
import "./Todo.css";
const Todo = props => {
    return (
        <div>
            <p
            onClick ={()=> props.completedTask(props.todoItem.id)}
           className ={`text-decoration ${props.todoItem.taskDone}`}
            >
            {props.todoItem.task}
            </p>
        </div>
        )
        }
        
        
export default Todo; 