import React from "react";

const TodoForm = props =>{
    return(
        <div>
        <input
            type="text"
            onChange={props.todoHandler}
            placeholder="To Do"
            value={props.todoSubmit.task}
        />
        <button onClick={props.addTodoFunction}> Add Todo </button>
        <button onClick={props.clearCompleted}> Clear Completed </button>
        </div>
    );
}

export default TodoForm;