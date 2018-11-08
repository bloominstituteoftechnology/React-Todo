import React from 'react';

const Todo = props => {
    return <li disabled={props.completed.toString()}>{props.text}</li>;
};

export default Todo;
