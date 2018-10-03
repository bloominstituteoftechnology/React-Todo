import React from 'react';

const Form = (props) => {
    return (
        <form>
            <input value={props.input} onChange={props.handleInput} placeholder={'..todo'} />
            <button onClick={props.handleSubmit}>Add Todo</button>
            <button onClick={props.clearComplete}>Clear Completed</button>
        </form>
    )
}

export default Form;