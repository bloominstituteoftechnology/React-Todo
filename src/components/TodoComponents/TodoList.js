import React from 'react';
import './Todo.css';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export const TodoList = (props) => {

    return (<div className="display" >{props.todos.map(x => {
        return (
            <div key={x.id} id={x.id}>
                {x.text} <br />
                <br />
            </div>
        )
    })}</div>
    )
}




