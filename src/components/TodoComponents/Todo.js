import React from 'react';
import './Todo.css';

const ToDo = (props) => {
    return (
        <li>{props.obj.task}</li>
    );
};

export default ToDo;