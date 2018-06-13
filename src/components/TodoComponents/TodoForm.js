import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <input value={props.value} onChange={props.onChange} type='text' placeholder='...todo'></input>
            <button onClick={props.addButton}>Add todo</button>
            <button>Clear Completed</button>
        </div>
    );
}

export default TodoForm;