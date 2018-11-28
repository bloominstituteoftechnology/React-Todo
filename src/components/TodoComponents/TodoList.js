// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

const TodoList = props => (
    <ul>
        {props.list.map(item => <Todo markComplete={props.markComplete} item={item}/>)}
    </ul>
);

export default TodoList;