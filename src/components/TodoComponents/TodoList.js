import React from 'react';
import ToDo from './Todo';

const TodoList = (props) => {
    return (
        <ul>
            {props.todolist.map(todos => {
                return (
                    <ToDo 
                        key={todos.id} 
                        value={todos.task} 
                        crossout={props.crossout} 
                        id={todos.id}
                        completed={todos.completed}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList;