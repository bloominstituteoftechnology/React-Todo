import React from 'react';
import './ToDo.css';

const ToDo = props => (
    <li
        className={props.className}
        data-taskid={props.taskId}
        onClick={props.onClick}
    >{props.children}</li>
);

export default ToDo;