// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'
const TodoList = ({todoList, finishTodo}) => {
    
    return (
        <div>
            {todoList.map(todo => <Todo key={todo.id} todo={todo} finishTodo={finishTodo}/>)}
        </div>
    )
}

export default TodoList
