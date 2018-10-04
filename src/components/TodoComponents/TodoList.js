import React from 'react';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    return(
        <div>
           {props.todoData.map(todo =>{
               return <h1>{todo.message}</h1>
           })}
        </div>
    );
}

export default TodoList;