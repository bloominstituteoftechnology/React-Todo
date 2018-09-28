import React from 'react';

const TodoForm = (props) =>{
    return(
        <div>
            <form>
                <input value={props.value} onChange={props.inputHander}/>
                <button onClick={props.submitHander}>Add Todo</button>
                <button onClick={props.clearHander}>Clear Completed</button>
            </form>
        </div>
    )
}



export default TodoForm;