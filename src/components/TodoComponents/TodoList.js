// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {
    return (
        <div>
            <h1>Todo List: MVP</h1>
        <div>
            {props.myToDoList.map(x => {
                return (
                    <div key={x.id}>{x.task}</div>
                )
            })}
        </div>
        </div>
    )
}

export default TodoList;
