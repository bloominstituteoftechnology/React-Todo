// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import ToDo from './Todo'

const TodoList = props => {
    return (
        <div className = 'todo-list' >
            {props.list.map( item => (
                <ToDo item = {item} />
        ))}
    </div>
    )
}

export default TodoList
