import React from 'react';
import '../TodoComponents/Todo.css'

const TodoForm = props => {
    console.log(props);
    return (
    <div>
        <input onKeyPress={props.thisprop.addItemEnter} value={props.thisprop.state.input} placeholder="whatchu need 2 do" onChange={props.thisprop.inputChange}/>
        <button onClick={props.thisprop.addItem}>Add</button>
        <button className="clearbtn" onClick={props.thisprop.done}>Clear Completed</button>
    </div>
    );
}

export default TodoForm;