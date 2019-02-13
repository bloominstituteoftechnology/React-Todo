import React from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = props => {
    return (
        <div>
           <h1>To-Do List</h1>
            <TodoList 
                id = {props.id}
                todos = {props.todos}
            />
            <TodoForm 
                handleChanges = {props.handleChanges}
                addTask = {props.addTask}
                task = {props.task}
                id = {props.id}
            />
        </div>
        
    )
}

export default Todo;
