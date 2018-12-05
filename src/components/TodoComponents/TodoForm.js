import React from 'react';

const ToDoForm = props=>{
    return(
        <form action="">
            <input type="text" name="to-do-input" id="todo-input"  placeholder="enter a todo"/>
            <button onClick={props.clickHandler}>Add To Do</button>
        </form>
    )
} 

export default ToDoForm;