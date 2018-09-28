import React from 'react';



const TodoForm =props=>{
    return(
        <form>
            <input placeholder="Enter What You MUST Accomplish"
                   onChange={props.handlerInputTodo} value={props.value}/>
            <div className="button">
                <button onClick={props.handlerSubmitTodo}>Add Todo</button>
                <button onClick={props.clearTodoHandler}>Clear Completed</button>
            </div>
        </form>
    )
}
export default TodoForm;