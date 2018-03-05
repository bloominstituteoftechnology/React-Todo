import React from 'react';

const Todo = (props) => {
    return (
        <div>{props.item.text}</div>
    );
}

export default Todo;