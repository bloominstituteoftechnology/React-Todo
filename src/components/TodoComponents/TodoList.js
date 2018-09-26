import React from 'react';
import Todo from './Todo'

//map over array of todo objects and render a todo component showing the task

const TodoList = (props) => {
    return (
        props.todos.map(
            todo => {
                return (
                    <Todo task={todo.task}/>
                )       
            }
        )
    )
}

export default TodoList;