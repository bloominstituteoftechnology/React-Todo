import React from 'react';

const Form = (props) => {
    return (
        <form>
            <input value={props.input} onChange={props.handleInput} />
            <button onClick={props.handleSubmit}>Add todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default Form;

//30 min left he breaks down the project