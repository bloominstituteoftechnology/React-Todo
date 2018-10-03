import React from "react";

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addNewTodo}>
                <input 
                name= "newTodo" 
                placeholder="Add to-do item here..." 
                type="text" 
                value={props.newTodo} 
                onChange={props.changeHandler} />
                <button>Add Todo</button>
                <button>Clear completed</button>
            </form>
        </div>
    )
}

export default TodoForm;
  