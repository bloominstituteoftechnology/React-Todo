// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

const TodoList = (props) => {
    return (
        <ul>
            
            <ToDo todo={props.todo} />
        </ul>
    );
}

export default TodoList;