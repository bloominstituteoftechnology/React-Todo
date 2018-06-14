import React from 'react';

const Todo = (props) => {
    return (
        <div>
            {props.todo.task}
        </div>
    );
};

export default Todo;