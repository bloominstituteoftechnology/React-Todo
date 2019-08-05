// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import ToDo from './Todo'

const TodoList = props => {
    return (
        <div className = 'todo-list' >
            {props.list.length > 1 ?

                <p>Click on your tasks to mark complete.</p>

                :<p>Start by adding your tasks with the form below.</p>

            }

            {props.list.map( item => (
                <ToDo item = {item} key = {item.id} toggleItem = {props.toggleItem} />
        ))}
    </div>
    )
}

export default TodoList
