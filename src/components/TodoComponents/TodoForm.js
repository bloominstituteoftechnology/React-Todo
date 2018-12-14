import React from 'react';

const TodoForm = props => {
    return (
        <div className="todoForm">
            <form onSubmit={props.addTodo}>
                <input type="text" name="inputText" value={props.inputText} onChange={props.handleChange} placeholder="...add new Todo" /> 
                <button type="submit">Add ToDo</button>             
            </form>
            
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoForm;