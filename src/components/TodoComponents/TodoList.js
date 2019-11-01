// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const Todo = props => {
    return (
        <div>
        {props.items.map(item => {
            return (
                <p>{item}</p>
            )})}
        </div>
    )
}

export default Todo;
