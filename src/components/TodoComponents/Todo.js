import React from 'react';

const Todo = ({id, completed, task, lineThrough}) => {
    return (
        <div className={`list ${completed}`} onClick={()=> lineThrough(id)}>
            <li>{task}</li>
        </div>
    )
}

export default Todo 