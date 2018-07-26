import React from 'react';

const TodoForm = props => {
    return (
    <div>
        <input onKeyPress={props.thisprop.addItemEnter} value={props.thisprop.state.input} placeholder="whatchu need 2 do" onChange={props.thisprop.inputChange}/>
        <button onClick={props.thisprop.addItem}>Add</button>
        <button onClick={props.thisprop.done}>Clear Completed</button>
    </div>
    );
}

export default TodoForm;