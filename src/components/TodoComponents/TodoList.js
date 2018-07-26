// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.arr.map(item => <Todo key={item.id} taskItem={item.task} handleTaskChange={item.handleTaskChange} completed={props.arr.task}/>)}
        </div>
    );
};

export default TodoList;