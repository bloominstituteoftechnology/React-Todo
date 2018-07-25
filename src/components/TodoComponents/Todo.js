import React from 'react';

const Todo = props => {
    const { task } = props.todoProp;
    return (
        <div>
            <h3>{task}</h3>
        </div>
    );
};

export default Todo;