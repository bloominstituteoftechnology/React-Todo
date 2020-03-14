// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.tasks.map((task,i) => {
                return <Todo key={i} task={task} toggleClass={props.toggleClass}/>
            })}
        </div>
    );
}

export default TodoList;
