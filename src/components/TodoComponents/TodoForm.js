import React from 'react';

const TodoForm = (props) =>{
    return(
        <div>
            <form>
                <input value={props.task} onChange={props.inputHander}/>
                <button onClick={props.submitHander} >Add Todo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}



export default TodoForm;