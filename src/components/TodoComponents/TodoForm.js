import React from 'react';

const TodoForm = props =>{
    return(
    <div>
        <form>
            <input                 
                placeholder = "Todo"                
                onChange = {props.handleUpdate}  
                value = {props.value}              
            />
            <button
                onClick = {props.handleAdd}
            >
                Add Todo
            </button>
            <button>Clear Completed</button>
        </form>
    </div>
    )
}

export default TodoForm;