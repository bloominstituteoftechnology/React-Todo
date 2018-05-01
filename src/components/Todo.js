import React from 'react';

const Todo = props => {
    return (
        <ul>
            {props.chars.map(char => {
                return <li key={char.id}>{char.name}</li>;
            })}
        </ul>
    );
};

export default Todo.js;