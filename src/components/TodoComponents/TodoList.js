// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

//props = props.todos - array of todos
const TodoList = ({todos}) =>{

    const todoTasks = todos.map(todo =>{
        return (
            <h3>
                {todo.task}
            </h3>
        );
    });


    return(
            <div>
                {todoTasks}
            </div>
        )
}


export default TodoList;