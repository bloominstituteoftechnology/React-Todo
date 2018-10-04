// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    console.log('todo list props', props);
    return (
        <div>
            <ul>
                {props.TodoList.map(item => {  //todoList here being passed from render?
                    <Todo todo={item} />
                })}
            </ul>
        </div>
    )
}
export default TodoList;