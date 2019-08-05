import React from 'react'

const Todo = ({ item, toggleItem }) => {
    return (
        <div
            className={`todo${item.completed ? '-complete' : ''}`}
            onClick ={() => toggleItem(item.id)}
        >
            <p>{item.task}</p>
        </div>
    )
}

export default Todo