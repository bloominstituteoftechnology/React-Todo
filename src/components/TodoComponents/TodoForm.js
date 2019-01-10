import React from 'react';

function TodoForm(props) {

    return (
        <div className= "input-form">
            <form onSubmit={props.addNewTodo}>
            <input
            value= {props.task}
            type= "text"
            name= "task"
            placeholder= "...todo"
            onChange={props.handleChanges}/>
            
            <button type="submit">Add Todo</button> 
            <button type="submit">Clear Completed</button> 
        </form>
        </div>
    )
}

export default TodoForm
