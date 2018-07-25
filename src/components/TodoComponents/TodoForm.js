import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <input id="inputBtn" placeholder="To Do..." type="text" name="todo" value={props.value}/>
            <button onClick={props.add}>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    );
};

export default TodoForm;