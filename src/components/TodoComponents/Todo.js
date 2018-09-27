import React from 'react';
import './Todo.css';
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList';


export const Todo = (props) => {

    return (
     <div className= 'todo-content'>
        <TodoForm text={props.text} addTodo={props.addTodo} handleKeyPress={props.handleKeyPress} todoList={props.todoList} handleChange={props.handleChange} />
        <TodoList key={props.todos.id} toggleCompleted={props.toggleCompleted} todos={props.todos} className= "todo-list"/>
     </div>
     )
}