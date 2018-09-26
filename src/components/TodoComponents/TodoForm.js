import React from 'react';

const TodoForm = (props) =>{
    return(
        <div>
            <form>
                <input value={props.task} onChange={props.inputHandler}/>
                <button onclick={props.submitHandler} >Add Todo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}



export default TodoForm;