// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props);
    return (
        <div>
            {props.tasks.map(task => {
                <Todo
                    task={props.task}
                    id={Date.now()}
                    completed={false}
                />
            })}
        </div>
    );
};

export default TodoList;