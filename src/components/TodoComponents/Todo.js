import React from 'react';
import './Todo.css';
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList';


export const Todo = (props) => {
    return (
     <div>
        <TodoList todos={props.todos} />
        <TodoForm text={props.text} addTodo={props.addTodo} handleKeyPress={props.handleKeyPress} todoList={props.todoList} handleChange={props.handleChange} />
     </div>
     )
}