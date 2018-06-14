import React from "react";

const TodoForm = props =>{
    return(
        <div className="form-container">
        <input
            type="text"
            onChange={props.todoHandler}
            placeholder="Type your To Do Here"
            value={props.todoSubmit.task}
            className="input"
        />
        <button className="add-todo" onClick={props.addTodoFunction}> Add Todo </button>
        <button className= "clear-completed" onClick={props.clearCompleted}> Clear Completed </button>
        </div>
    );
}

export default TodoForm;