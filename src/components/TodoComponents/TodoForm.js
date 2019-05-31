import React from "react";
import "./Todo.css";

const TodoForm = props => {
    return (
        <form className="form" name="todoForm" onSubmit={props.addTodoHandler}>
            <input
                className="text-field"
                type="text"
                value={props.task}
                placeholder="Enter a todo here ..."
                name="task"
                onChange={props.changeHandler} />
            <div>
                <button className="button"onClick={props.addTodoHandler}>Add Todo</button>
                <button className="button" onClick={props.deleteCompletedHandler}>Clear Completed</button> 
            </div>
        </form>
    )
}

export default TodoForm;