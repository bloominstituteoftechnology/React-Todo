import React from 'react';

const TodoList = props => {
    return(
        <div>
        {props.todoData.map( item => {
    return <p>{item.task}</p>})
        }
        </div>
    )
}


export default TodoList;