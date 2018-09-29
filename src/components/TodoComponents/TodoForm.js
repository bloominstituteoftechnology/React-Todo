import React from 'react';

 const TodoForm = (props) => {
    return (
        <form>
            <input value={props.input} onChange={props.inputHandler} />
            <button onClick={props.submit}>Add</button>
            <button onClick={props.clear}>Clear</button>
        </form>
    )
}
 export default TodoForm;