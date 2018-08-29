// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './components/TodoComponents/Todo';


const TodoList = (props) => {
    return (
        <ul>
           {props.todos.map(todo => <Todo todo={todo} />)} 
        </ul>
    );
};

export default TodoList;