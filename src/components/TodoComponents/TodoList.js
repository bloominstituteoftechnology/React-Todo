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
                        crossout={props.crossout} 
                        id={newToDo.id}
                        completed={newToDo.completed}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList;