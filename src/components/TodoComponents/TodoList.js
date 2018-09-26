// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo';

const TodoList = (props) => {

    return (
        <div>
            {props.tasks.map(todos => {
                return (
                    <div key={todos.id}>
                        <Todo task={todos.task} />
                    </div>
                );
            })}
        </div>
    )
}

export default TodoList