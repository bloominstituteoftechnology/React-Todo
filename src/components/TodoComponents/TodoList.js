import React from 'react';
import ToDo from './Todo';
import './Todo.css';
 const TodoList = (props) => {
    return (
        <ul>
            {props.todolist.map(newToDo => {
                return (
                    <ToDo 
                        key={newToDo.id} 
                        value={newToDo.task} 
                        taskComplete={props.taskComplete} 
                        id={newToDo.id}
                        completed={newToDo.completed}
                    />
                )
            })}
        </ul>
    )
}
 export default TodoList;