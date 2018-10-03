// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {
    return (
    <div>
        {props.list.map( (item) => {
             return (<h1 onClick={() => props.clickComplete(item.id)} style={item.completed ? {textDecoration:'underline'} : null}>{item.task}</h1>)
        })}
    </div>
    )
}



export default TodoList