// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from 'react';

const TodoList = props => {
    return <h3
    onClick={() => props.changeStatus(props.todoListProps.id)}
    className={`list-items ${props.todoListProps.completed}`}
    >
    {props.todoListProps.task}</h3>
};

export default TodoList;