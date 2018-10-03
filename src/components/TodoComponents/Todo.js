import React from 'react';
import './Todo.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = props => { 
    return (
        <div className = 'todo'>
            <TodoForm 
            newTask = {props.newTask}
            inputChange = {props.inputChange}
            addTodoInput = {props.addTodoInput}
            />    
            <TodoList 
            todoData = {props.todoData}
            completeTaskWipe = {props.completeTaskWipe}
            />
        </div>
    );
}

export default Todo;
