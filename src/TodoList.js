import React from 'react';
import App from './App';

const TodoList = props => {
    return (
        <div>
            {props.tasks.map((task, index) => (
           <div key={task + index}>{task}</div>
       ))}
        </div>
    );
};

export default TodoList;