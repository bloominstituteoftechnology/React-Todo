import React from 'react';

const Item = ({item, toggleTodo}) => {
    return(
        <div
        style={item.done ? { textDecoration: 'line-through' } : null}
        onClick={ () => {toggleTodo(item.id) }}
        >
            <p>{item.task}</p>
        </div>
    )    
}

export default Item;