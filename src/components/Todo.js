import React from 'react'
const Todo = ({todo, finishTodo}) => {

    return (
        <p onClick={() => finishTodo(todo.id)} className={todo.completed ? 'finished' : ''}>{todo.name}</p>
    )
}

export default Todo
