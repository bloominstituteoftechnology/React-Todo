import React from 'react';
import './Todo.css';
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList';


export const Todo = (props) => {

    return (
     <div className= 'todo-content'>
        <TodoForm text={props.text} addTodo={props.addTodo} handleKeyPress={props.handleKeyPress} todoList={props.todoList} handleChange={props.handleChange} />
        <TodoList handleDelete={props.handleDelete} todos={props.todos} className= "todo-list"/>
     </div>
     )
}