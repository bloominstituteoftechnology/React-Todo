import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <input id='inputForm' placeholder='add an item' onKeyPress={props.handler} />
            <div onClick={props.add}>Add Todo</div>
            <div onClick={props.clearAll}>Clear</div>
        </div>
    )
}

export default TodoForm;