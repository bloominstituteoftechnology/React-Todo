import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
        <form>
            <input className="type-space" value={props.inputText} onChange={props.handleInput} />
            <div className="buttons">
                <button className="add" onClick={props.add}>Add Todo</button>
                <button className="clear" onClick={props.clear}>Clear Completed</button>
            </div>
        </form>
    );
}

export default TodoForm;