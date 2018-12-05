import React from 'react';

const ToDoForm = props=>{
    return(
        <form action="">
            <input type="text" name="to-do-input" id="todo-input"  placeholder="enter a todo" onSubmit={props.clickHandler}/>
            <button onClick={props.clickHandler}>Add To Do</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
} 

export default ToDoForm;