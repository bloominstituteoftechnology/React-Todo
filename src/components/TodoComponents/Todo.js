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
            completeTaskWipe={props.completeTaskWipe}
            />    
            <TodoList 
            todoData = {props.todoData}
            completeTaskSelect = {props.completeTaskSelect}
            decorate ={props.decorate}
            />
        </div>
    );
}

export default Todo;
