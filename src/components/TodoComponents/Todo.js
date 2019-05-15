import React from 'react';

const Todo = props => {

    // const renderCompleted = () => {
    //     if ( props.theStuff.completed === false){
    //         return <p> False </p>
    //     }
    // }
     return (
        <div>
            <h4>Todo Title: {props.theStuff.task}</h4>
            <p>Completed: {props.theStuff.completed ? 'True' : 'False'}</p>
        </div>
    );
};
export default Todo;