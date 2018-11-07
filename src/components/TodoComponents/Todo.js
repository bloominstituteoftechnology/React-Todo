import React from 'react';

const Todo = props =>{
    return(
        <div>
        <p>{ props.todo.task }</p>
        <p>{ props.todo.id }</p>
        <p>{ props.todo.completed }</p>
        </div>
    );
};

export default Todo;