// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map(todo => {
                return (
                    <ToDo 
                        key={todo.id} 
                        value={todo.task} 
                        completed={todo.completed} 
                    />
                )
            })}
        </div>
    );
}

export default TodoList;