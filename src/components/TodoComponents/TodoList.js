import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {
    return <ul>
        {props.todos.map(todo => <Todo  key= {todo.id} todo={todo} completed={props.todoCompleted}/>)}
        </ul>;
}
export default TodoList;