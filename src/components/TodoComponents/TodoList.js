import React from 'react';
import ToDo from './Todo';
 const TodoList = (props) => {
    return (
        <ul>
            {props.todolist.map(newToDo => {
                return (
                    <ToDo 
                        key={newToDo.id} 
                        value={newToDo.task} 
                        taskComplete={newToDo.taskComplete} 
                    />
                )
            })}
        </ul>
    )
}
 export default TodoList;