import React from 'react';

const ToDo = props => (
    <li onClick={props.onClick}>{props.children}</li>
);

export default ToDo;