// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React, {useEffect} from 'react'
import Todo from './Todo'

//functional component
const TodoList = props =>{
return (
    <div>
    {props.todos.map(todo => (
        <Todo task={todo.task} 
        id={todo.id} 
        completed={todo.completed}
        key={todo.id}
        toggleDone={todo.toggleDone}
        />
    ))}
    </div>
);
} 
export default TodoList;