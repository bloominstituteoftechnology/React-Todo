import React from 'react';

const Todo = props => {
    const {completed, task } = props.item
    const taskItem = (completed)? <h4 className="completed">{task}</h4> : <h4>{task}</h4>
    return(

    <div onClick={() => props.handleClick(0)}>
        {taskItem}
    </div>
    )
}


export default Todo;