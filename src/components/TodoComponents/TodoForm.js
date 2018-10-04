import React from "react";

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addNewTodo}>
                <input 
                name= "newTodo" 
                placeholder="...todo" 
                type="text" 
                value={props.newTodo} 
                onChange={props.textInputHandler} />
                <button>Add Todo</button>
                <button onClick={props.filterCompleted}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;