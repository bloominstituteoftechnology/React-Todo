import React from 'react';

const TodoForm = (props) => {
    return (
        <div className='form'>
            <input type="text" placeholder="Enter todo item" value={props.value}/>
            <div className='button' onClick={props.handleChange}>
                Add
                </div>
        </div>

    );
};

export default TodoForm;