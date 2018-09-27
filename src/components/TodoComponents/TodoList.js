// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(param => 
                <Todo key={param.id} todo={param}
                handleClick={props.handleClick}
                />
                )}
        </div>
    )
}

export default TodoList;