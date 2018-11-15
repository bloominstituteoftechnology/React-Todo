import React from "react";

const Goal = props => {
    return (
        <div className='goal'
            style={props.goal.completed ? { textDecoration: 'line-through' } : null} 
            onClick={ () => props.handleToggleComplete(props.goal.id)}
            >
                {props.goal.task}
        </div>
    );
}

export default Goal;