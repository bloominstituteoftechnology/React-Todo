// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return(
        <div className='todo-list'>
            <h3>To Do List</h3>
            {props.todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo}
                    toggleTodo={props.toggleTodo}
                />
            ))}
            <button className='clear-button' onClick={props.clearPurchased}>
                Clear Completed Tasks
            </button>
        </div>
    )
}

export default TodoList