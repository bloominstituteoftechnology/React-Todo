import React from 'react';

export default function Item(props) {
    const handleClick = () => {
        props.toggleCompleted(props.item.id);
    }

    const handleDeleteClick = (e) => {
        props.deleteItem(props.item.id);
    }

    return (
        <div className='itemContainer'>
            <div className={`item${props.item.completed ? 'Done!' : ''}`} onClick={handleClick}>
                <p>{props.item.task}</p>
            </div>
            <button className='delete invisible' onClick={handleDeleteClick}>x</button>
        </div>
    )
}