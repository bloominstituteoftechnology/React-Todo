import React from 'react';


const Todo = props => {
    return <h1 
    onClick={() => props.addLineThrough(props.itemInTodo.id)}
    // 
    className={`item-header ${props.itemInTodo.finished}`}
    >
       {props.itemInTodo.todoItem}
       </h1>;
    

};

export default Todo;