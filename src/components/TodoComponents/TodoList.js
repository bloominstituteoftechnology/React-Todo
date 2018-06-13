import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => (  
    <div className="todo-list">
        {console.log(todos)}
        {todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
        ))}
    </div>
)

export default TodoList
