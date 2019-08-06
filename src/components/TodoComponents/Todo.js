import React from 'react';

const Todo = props => {
    console.log(props.task);
    return (
        <div>
            <ul>
                <li>{props.task}</li>
            </ul>
            
            <div>
                className={`todo${props.item.purchased ? ' purchased' : ''}`}
                onClick={() => props.toggleItem(props.item.id)}
            </div>

        </div>
        
    )
}

export default Todo