import React from 'react';
import './Todo.css';

const Todo=props=>{ 
   
    const {task,id,completed}=props.todo;
    return(
        <div className={completed ? "dash":null} onClick=
            {()=>props.toggleTodo(id)}>{task}</div>
    );
    
};
   

export default Todo;