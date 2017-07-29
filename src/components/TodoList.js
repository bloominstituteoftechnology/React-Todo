import React from 'react';

const TodoList = props => {
    return (
        <ol>
      Task List:
            {props.todos.map((todo, index) => {
                return <li value={index}>{todo}</li>;
            })}
        </ol>
    );
};

export default TodoList;
