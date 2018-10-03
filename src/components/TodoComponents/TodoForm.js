import React from 'react';
const TodoForm = (props)=>{
    return(
        <div>
            <form onSubmit={props.addNewTodo}>
                <input
                    type="text"
                    name="todoText"
                    placeholder="input new task"
                    onChange={props.changeHandler}
                    value={props.todoText}
        />
                <button  type="submit" onClick={props.addNewTodo}>
                    Add new todo
                </button>
            </form>
        </div>
    )
}
export default TodoForm;