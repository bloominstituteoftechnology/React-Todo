import React from 'react';


const TodoForm = props => { 
    return (
        <div className="to-do-form">
            <input type="text" placeholder="...todo" name="todo" onChange={props.changeTodo} value={props.todo}/>
            <button className="add-to-do" onClick={props.addTodo}>Add Todo</button> 
            <button className="clear-completed" onClick={props.handleClearTodos}>Clear Completed</button>
        </div>

    );
}


export default TodoForm;