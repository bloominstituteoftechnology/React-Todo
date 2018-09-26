import React from 'react';

const Form = (props) => {
    return (
        <form>
            <input value={props.input} onChange={props.handleInput} />
            <button onClick={props.handleSubmit}>Add todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default Form;

//value={this.state.task}