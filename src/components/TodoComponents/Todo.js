import React from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = props => {
    return (
        <div>
           <h1>To-Do List</h1>
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
