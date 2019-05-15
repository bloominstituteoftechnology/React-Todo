// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

 

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            <h1>Todo List</h1>
            {props.todos.map(todo => {
                return <Todo key={todo.id} theStuff={todo} />;
            })}
        </div>
    );
};

export default TodoList;