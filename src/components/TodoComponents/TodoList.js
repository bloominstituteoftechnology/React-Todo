// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = ({todos}) => {
    return (
        <div>
            {todos.map(todo => {
                return (
                <Todo
                    handleToggleCompleted={todos.toggleCompleted}
                    key={todo.id}
                    todo={todo}
                />
                );
            })}
        </div>
    );
}

export default TodoList;