// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';



const TodoList = props => {

    return(
    <div className="todosList">
        {props.todos.map (todo => (
            <Todo 
            task ={todo.task}
            id = {todo.id}
            completed = {todo.completed}
            toggleTodos= {props.toggleTodos}
            />
        ))}
    </div>)
    
}

export default TodoList;