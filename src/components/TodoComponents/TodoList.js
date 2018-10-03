import React from 'react';

const TodoList = props => {
    return(
        <div>
        {props.todoData.map( item => {
    return <h3>{item.task}</h3>})
        }
        </div>
    )
}


export default TodoList;