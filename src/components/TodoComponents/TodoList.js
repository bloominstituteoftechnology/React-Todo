import React from 'react';
import Todo from './Todo'

let todos = [{task: 'test'}, {task: 'test2'}]

const TodoList = (props) => {
    return (
        todos.map(
            todo => {
                return (
                    <p>{todo.task}</p>
                )       
            }
        )
    )
}

export default TodoList;