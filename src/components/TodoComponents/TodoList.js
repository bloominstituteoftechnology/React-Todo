import React from 'react';
const TodoList = (props)=>{
    return(
        props.todoData.map((item)=>{
            return <h1>{item.task}</h1>
        })
    )
}
export default TodoList;