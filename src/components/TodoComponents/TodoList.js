import React from 'react'
import Todo from './Todo'

export default ({todos}) => (
    <div className="todo-list">
        {todos.map(todo => (
            <Todo task={todo} />
        ))}
    </div>
)
