import React from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'


const Todo = props => {
    return (
        <div className="todo-container">
            <div className="header">
                <h1>To-Do List</h1>
                <img 
                src="../mario_luigi_dance.gif"
                alt="marioandluigi"
                ></img>
            </div>
            
            <TodoList 
                todos = {props.todos}
                completeTask = {props.completeTask}
            />
            <TodoForm 
                handleChanges = {props.handleChanges}
                addTask = {props.addTask}
                task = {props.task}
                id = {props.uid}
            />
        </div>
        
    )
}

export default Todo;
