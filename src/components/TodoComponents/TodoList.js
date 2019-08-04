// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

const TodoList = props => {
    return (
        <div className="todo-list">
            <h2>Todo List{props.propsTodoList}</h2>
        </div>
    )
}

export default TodoList;