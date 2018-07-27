// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
const TodoList = props => (
    <ul>
        {props.list.map((item) => <Todo item={item.task} key={item.id}/>)}
    </ul>
)

export default TodoList;