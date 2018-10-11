// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';



const TodoList = props => {
    return(
        <div className="todo-list-container">
        <h1 className="title">{props.inputText}</h1>
        {props.todoList.map(todo => <Todo key={todo.id.toString()} completed={props.completed} completedTask = {props.completedTask} todoList={todo}  />)}
        </div>    
    );
}

export default TodoList;