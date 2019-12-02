// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Item from './Todo'

const TaskList = props => {

    return (
        <div className="todo-list">
            {props.tasks.map(item => (
                <Item key={item.id} item={item} />
            ))}
            <button className="clear" onClick={props.clearTask}>
                Clear All
            </button>
        </div>
    )
}

export default TaskList;