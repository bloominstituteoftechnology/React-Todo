// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {
    return(
        <div>
            <h1>Todo List: MVP</h1>
            {props.todoArray.map(item => {
                return <h3 key={item.id}>{item.task}</h3>
            })}
           
        </div>
    )
}

export default TodoList;