import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => (
    <div className="todo-list">
        {todos.map(todo => (
            <Todo task={todo} />
        ))}
    </div>
)

export default TodoList
