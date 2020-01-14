import React from 'react';

const Todo = props => {
    return (
        <div>
            {props.todo.item}
        </div>
    );
};

export default Todo;