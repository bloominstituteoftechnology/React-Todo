import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <input id='inputForm' placeholder='add an item' onKeyPress={props.handler} />
            <button onClick={props.add}>Add Todo</button>
            <button onClick={props.clearAll}>Clear</button>
        </div>
    )
}

export default TodoForm;