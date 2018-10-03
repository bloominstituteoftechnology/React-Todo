import React from 'react';


const Todo = props => {
    return (
        <div>
            {props.newItem.task}
        </div>
    );
};

export default Todo;