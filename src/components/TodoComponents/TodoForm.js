import React from 'react';

function TodoForm(props) {

    return (
        <div className= "input-form">
            <form>
            <input
            value= {props.newTodoText}
            type= "text"
            name= "newTodoText"
            placeholder= "...todo"
            onChange={props.handleChanges}/>
            
            <button type="submit" onClick={props.addNewTodo}>Add Todo</button> 
            <button type="submit" onClick={props.clearComplete}>Clear Completed</button> 
        </form>
        </div>
    )
}

export default TodoForm
