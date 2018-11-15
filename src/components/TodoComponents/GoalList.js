import React from "react";
import Goal from "./Goal";

const GoalList = props => {
    return (
        <div className='goal-list'>
            {props.goals.map(goal => (
                <Goal
                handleToggleComplete={props.handleToggleComplete}
                key={goal.id}
                goal={goal} 
                />
            ))}
        </div>
    );
}

export default GoalList;