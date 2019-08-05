import React from 'react';

const Todo = props =>{
    return(
        <div
            className={`todo${props.todo.completed ?' completed': ''}`}
            onClick={()=>{props.toggleClick(props.item.id)}}
        >
            <p>{props.todo.task}</p>
        </div>
    )
}

export default  Todo