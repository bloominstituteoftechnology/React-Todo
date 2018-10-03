import React from 'react';

const Form = props => {
    return(
        <div>
            <input placeholder='..todo'  value={props.todo}></input>
            <button >Add Todo</button>
            <button >Clear Completed</button>
        </div>
    );
}

export default Form;