// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
/*import Todo from './Todo'*/

const TodoList = (props) => {  //receives array, iterates over array, generates new 'Todo' for each.
    console.log(props);
    return (
    <ul>
           {props.todolist.map((todo) => {
            return <li key={todo.task}>{todo.task}</li>
            
        })}
    </ul>
)
}

export default TodoList;

/*
{props.itemslist.map(todo => {
            return <li key={Math.random()}>{todo}</li>
        })}*/