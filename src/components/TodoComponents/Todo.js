import React from 'react';
import './Todo.css';
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList';


export const Todo = (props) => {

    return (
     <div className= 'todo-content'>
        <TodoForm text={props.text} addTodo={props.addTodo} deleteItems={props.deleteItems} handleKeyPress={props.handleKeyPress} todoList={props.todoList} handleChange={props.handleChange} />
        <TodoList  toggleCompleted={props.toggleCompleted} todos={props.todos} deleteItem={props.deleteItem} className= "todo-list"/>
     </div>
     )
}