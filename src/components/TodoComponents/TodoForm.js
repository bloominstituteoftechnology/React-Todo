import React from 'react';

 const TodoForm = (props) => {
    return (
        <form>
            <input value={props.input} onChange={props.inputHandler} />
            <button onClick={props.submit}>Add todo</button>
            <button>Clear Completed</button>
        </form>
    )
}
 export default TodoForm;