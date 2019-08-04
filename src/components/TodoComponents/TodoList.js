// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from "./Todo"

const TodoList = props => {
    return (
        <div className="todo-list">
            <h2>Todo List</h2>
            {props.todo.map(item => (
                <Todo 
                    key={item.id} 
                    item={item}
                />
            ))}
            
        </div>
    )
}

export default TodoList;