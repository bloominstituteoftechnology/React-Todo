import React from 'react';
import ToDo from './ToDo';
import '../index.css';


const ToDoList = props => {
    if(props.toDoList.length < 1){
        return(
            <div>
                Please Enter a ToDo above!
            </div>
        )
    }
    else {
        return(
            <div>
                {props.toDoList.map(task => {
                    return (
                        <ToDo 
                            key={task.id}
                            id={task.id}
                            handleToggle={props.handleToggle}
                            todo = {task}
                            complete = {props.complete}
                            handleDelete = {props.handleDelete}
                            />

                    )
                })}
                <button onClick={props.handleComplete}>Clear Completed</button>
            </div>
        )
    }
    
}

export default ToDoList;