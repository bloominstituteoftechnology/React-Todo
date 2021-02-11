// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'

import Todo from './Todo'

const TodoList = props => {

    return (
<div className='todo-list'>
    {props.objectiveToday.map(obj => (
        <Todo toggleCompleted={props.toggleCompleted} key={obj.id}  obj={obj} />
    ))}
    <button onClick={() => props.clearCompleted()}className='clear-btn'>Clear Completed</button>
</div>
    );
};

export default TodoList;