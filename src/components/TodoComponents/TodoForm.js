import React from 'react';
import '../TodoComponents/Todo.css';

const TodoForm = props => {
    // console.log(props);
    return (
        <div>
            <input onChange={props.handleEventChange} type="text" placeholder="Add to-do..."></input>
            <button onClick={props.handleSubmit}>Submit</button>
            <button onClick={props.handleClear}>Clear</button>
        </div>
    );
};

export default TodoForm;