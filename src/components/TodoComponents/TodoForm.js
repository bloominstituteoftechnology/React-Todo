import React from 'react';

const Form = (props) => {
    return (
        <form>
            <input onChange={this.handleInput} />
            <button onClick={this.handleClick}>Add todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default Form;

//value={this.state.task}