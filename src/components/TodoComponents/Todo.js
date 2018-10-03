import React from 'react';

const Todo = ({todo}) => {
    return (
        <div >
            {todo.task}
        </div>
    );
}

export default Todo;