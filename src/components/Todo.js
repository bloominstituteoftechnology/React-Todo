import React from 'react';

const Todo = props => {
    return (
        <ul>
            {props.tasks.map((char, index) => {
                return <li key={char.id}>{char.name}</li>;


            })}
        </ul>
    );

};

export default Todo;

