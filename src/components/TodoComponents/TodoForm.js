import React from "react";

const TodoForm = props =>{
    return(
        <div>
        <input
            type="text"
            placeholder="To Do"
            value={props.todo}
        />
        <button> Add Todo </button>
        <button> Clear Completed </button>
        </div>
    );
}

export default TodoForm;