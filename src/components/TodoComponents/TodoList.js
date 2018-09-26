// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = (props) => {
    // Gets todoArray from props.
    console.log("todolist", props);

    // Render the list of items in the array.
    return (
        <div>
            {props.todoArray.map( todo => {
                return(
                    <div key={todo.id}>
                        {todo.task}
                    </div>
                );
            })}
        </div>
    );
}

export default TodoList;
