import React from 'react';

function TodoForm(props) {

    return (
        <div className= "input-form">
            <form>
            <input
            value= {props.newTodoText}
            type= "text"
            name= "newTodoText"
            placeholder= "Enter new task..."
            onChange={props.handleChanges}/>
            
            <button type="submit" onClick={props.addNewTodo}>Add Todo</button> 
            <button type="submit" onClick={props.clearComplete}>Clear</button> 
        </form>
        </div>
    )
}

export default TodoForm
