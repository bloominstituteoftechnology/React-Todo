import React from 'react';

const Todo = props => {
    return (
        <div>
            {props.list.task}
        </div>
    );
};

export default Todo;