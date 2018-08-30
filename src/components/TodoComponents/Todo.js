import React from 'react';

function Todo(props) {
    return(
        <div>
            {props.todo.task}

            <button onClick = {() => props.handleToggleComplete(props.todo.id)}>click</button>
        </div>
    );
};

export default Todo;