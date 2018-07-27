// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.arr.map(item => <Todo id={item.id} taskItem={item.task} completed={item.completed} completedToggle={props.completedToggle}/>)}
        </div>
    );
};

export default TodoList;