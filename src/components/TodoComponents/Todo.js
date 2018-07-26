import React from 'react';

const Todo = props => {
    return(
        <div>
            {props.toDos.task}
        </div>
    )
};

export default Todo;