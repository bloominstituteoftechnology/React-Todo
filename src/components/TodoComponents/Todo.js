import React from 'react';

const Todo = props => <li onClick={props.toggleClass}>{props.todo}</li>

export default Todo