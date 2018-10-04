import React from 'react';
import Todo from './Todo';
const TodoList = (props)=>{
    return(
        props.todoData.map((item)=>{
            return <h1 style={item.completed ? {textDecoration: 'line-through'} :null} id={item.id} onClick={(event) => props.completedItem(event)}>{item.task}</h1>
            // return <h1 className ={props.completed} id={item.id} onClick={(event) => props.completedItem(event)}>{item.task}</h1>
        })
    )
}
export default TodoList;