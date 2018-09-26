import React from 'react';
import './Todo.css';

const TodoForm  =   (props) =>  {
    return(
        <div className="todoForm">
            <input placeholder="...todo" />
            <div onClick={()    =>  props.clickAdd(document.querySelector("input").value)}>Add Todo</div>
            <div>Clear Completed</div>
        </div>
    )
}

export default TodoForm;
