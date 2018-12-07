// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    return(
        <li>
            {props.task.map(task =>(<Todo task = {props.task}  id = {props.id} complete = {props.complete} />))};
        </li>
    );
};
        

export default TodoList;