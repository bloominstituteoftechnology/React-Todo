import React from "react";
import './GoalForm.css'

const GoalForm = props => {
    return (
        <form className='goal-form'>
            <input
                onChange={props.handleGoalChange}
                type='text'
                name='goal'
                value={props.value}
                placeholder='add new goal'
            />
            <button onClick={props.handleAddGoal}>Add Goal</button>
            <button onClick={props.handleClearGoal}>Remove Goal Accomplished</button>
        </form>
    );    
}

export default GoalForm;