// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

 

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className ='list'>
            <h1>Todo List</h1>
            {props.todos.map(todo => {
                return <Todo key={todo.id} theStuff={todo} toggle = {props.toggle} />;
            })}
        </div>
    );
};

export default TodoList;