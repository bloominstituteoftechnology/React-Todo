import React from 'react';
import './Todo.css';
import Todo from './Todo';

/* <TodoList /> receives your Todos array and iterates over the list generating
a new <Todo /> for each element in the array. */


const TodoList = props => {
    return props.list.map(param => <Todo key = {param.id} task = {param.task}/>); 
}

export default TodoList; 
