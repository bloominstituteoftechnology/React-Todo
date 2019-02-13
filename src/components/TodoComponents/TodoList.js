// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm'
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            <h1>To-Do List</h1>
            <Todo />
            <TodoForm 
                handleChanges = {props.handleChanges}
                addTask = {props.addTask}
                task = {props.task}
                id = {props.id}
            />
        </div>
    );
}

export default TodoList;