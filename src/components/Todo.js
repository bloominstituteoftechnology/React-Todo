import React from 'react';

const Todo = props => {
    return (
        <div>
            {props.todos.map((todo, index) => (
                <div key={todo + index}>{todo}</div>
            ))}
        </div>
    );
};

export default Todo;