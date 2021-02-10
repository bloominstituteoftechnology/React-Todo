import React from 'react'

const Objective = props => {
    return (
        <div className={`obj${props.obj.completed ? 'completed' : ''}`}
        onClick={() => props.toggleCompleted(props.obj.id)}
        >
            <p>{props.completed.name}</p>
        </div>
    );
};

export default Objective;