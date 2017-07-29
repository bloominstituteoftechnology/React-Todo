import React from 'react';

const TodoList = props => {
    return (
        <div>
            <div>
                <h1>Welcome to Todo List!</h1>
            </div>
            <div>
                <h2>Task List:</h2>
                <ol>
                    {props.todos.map((todo, index) => {
                        return <li value={index + 1}>{todo}</li>;
                    })}
                </ol>
            </div>
        </div>
    );
};

export default TodoList;
