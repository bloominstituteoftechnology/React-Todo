import React from 'react';
import ToDo from './ToDo';
import '../index.css';


const ToDoList = props => {
    if(props.toDoList.length < 1){
        return(
            <div className="todo-list-container">
                <h2>Please Enter a ToDo above!</h2>
            </div>
        )
    }
    else {
        return(
            <div className="todo-list-container">
                <button className="clear-complete" onClick={props.handleComplete}>Clear Completed</button>
                <ul className="todo-list">
                    {props.toDoList.map(task => {
                        return (
                            <ToDo 
                                key={task.id}
                                id={task.id}
                                handleToggle={props.handleToggle}
                                todo = {task}
                                complete = {props.complete}
                                />

                        )
                    })}
                </ul>
            </div>

        )
    }
    
}

export default ToDoList;