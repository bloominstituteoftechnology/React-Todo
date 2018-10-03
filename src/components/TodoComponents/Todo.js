import React from 'react';
import './Todo.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = props => { 
    return (
        <div className = 'todo'>
            <TodoForm todoData = {props.todoData}/>    
            <TodoList todoData = {props.todoData}/>
        </div>
    );
}

export default Todo;
