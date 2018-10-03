import React from 'react';
import './ToDo.css';

const ToDo = props => (
    <li
        className={props.className}
        data-taskid={props.whatTheHellDoYouMeanKeyIsntAPropWhyDidYouHaveMeDeclareItThen}
        onClick={props.onClick}
    >{props.children}</li>
);

export default ToDo;