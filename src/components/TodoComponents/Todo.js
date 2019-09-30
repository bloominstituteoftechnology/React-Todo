import React from 'react';

const Todo = props => {

    return (

        <div className={`task${props.task.completed ? ' completed' : ''}`}>
            {console.log('TODO', props)}
            <p>{props.task}</p>
            <button
                onClick={() => props.toggleComplete(props.task.id)}
            // onClick={console.log('THIS IS ON TODO:', props.task.completed)}
            >Mark Complete</button>
        </div>
    )
}

export default Todo;