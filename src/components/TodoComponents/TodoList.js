// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './todoList.css';

const TodoList = props => {
    return(
        <div className= 'todo-list'>
            {props.todos.map(currentTodo => (
                <Todo 
                    key={currentTodo.id} 
                    singleTodo={currentTodo} 
                    isComplete={props.isComplete}
                />
            ))}
        </div>
    );
}

export default TodoList;