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
        console.log(props.toDoList)
        return(
            <div>
                {props.toDoList.map(task => {
                    return (
                        <ToDo 
                            key={task + props.complete}
                            handleToggle={props.handleToggle}
                            todo = {task}
                            complete = {props.complete}
                            />

                    )
                })}
            </div>
        )
    }
    
}

export default ToDoList;