import React from 'react';
import './Todo.css';

const ToDo = props => {
    console.log('props', props)
    return (
        <div
        onClick={() => props.toggleStrike(props.listItem.id)}
        className={props.listItem.completed === true ? 'strike-through' : ''}
        >
            {props.listItem.task}
        </div>
    );
}
 
export default ToDo;
