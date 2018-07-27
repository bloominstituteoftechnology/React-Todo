import React from 'react';
import './Todo.css';

const Todo = props => {

    return(
        <div className='task'
             style={props.completed ? {textDecoration:'line-through'}:null}
             onClick={() => props.crossout(props.itemId)}>
            {props.text}
        </div>
    );
}

export default Todo;