import React from 'react';
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
/* Build Instructions
<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
*/

function TodoList(props) {
    return (
        <div>
        {props.tasks.map(item => {
            return <Todo item={item} />
        })}
        </div>
    );
}

export default TodoList;