// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = ({list}) => {
    return (
        <div>
            {
                list.map((todo, i) => {
                    return <Todo task={todo.task} key={todo.id}/>
                })
            }
        </div>
    );
}

export default TodoList;

