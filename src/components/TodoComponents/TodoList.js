// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    // Gets todoArray from props.
    console.log("todolist", props);

    // Render the list of items in the array.
    return (
        <div>
            {props.todoArray.map( todo => {
                return(
                    <Todo id={todo.id} task={todo.task} flag={todo.completed} />
                );
            })}
        </div>
    );
}

export default TodoList;
