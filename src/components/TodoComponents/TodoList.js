// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';


const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => {
               return <div key={todo.uid} onClick={props.completeTask}>{todo.task}</div>
            })}
        </div>
    );
}

export default TodoList;