import React from 'react'

import './Todo.css'

const Todo = ({ item, toggleItem }) => {
    return (
        <div
            className={`todo${item.completed ? 'Complete' : ''}`}
            onClick ={() => toggleItem(item.id)}
        >
            <p>{item.task}</p>
        </div>
    )
}

export default Todo