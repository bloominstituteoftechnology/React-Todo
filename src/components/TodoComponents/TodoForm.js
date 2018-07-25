import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <input placeholder="To Do..." type="text" name="todo" value={props.value}/>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    );
};

export default TodoForm;