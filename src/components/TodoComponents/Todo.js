import React from 'react';


const Todo = props => { 
    return (
        <h2
        onClick={() => props.changeFinished(props.todoOnProp.id)}
        className={`eachListed ${props.todoOnProp.completed}`}>
        {props.todoOnProp.task}
        </h2>
    );
};


export default Todo;
