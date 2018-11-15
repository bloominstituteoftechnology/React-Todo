import React from "react";

const Goal = props => {
    return (
        <div className='goal'
            style={props.goal.completed ? { textDecoration: 'line-through', color:'#54BCEF' } : null} 
            onClick={ () => props.handleToggleComplete(props.goal.id)}
            >
                {props.goal.task}
        </div>
    );
}

export default Goal;