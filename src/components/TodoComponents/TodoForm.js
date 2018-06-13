import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
   return  (
    <div>
    <input onClick = {() => props.inputHandler()} type = "text" placeholder = "...todo" />
    <button onClick = {() => props.addTask()}>Add Todo</button>
    <button onClick = {() => props.clearCompleted()}>Clear Completed</button>
    </div>
    );
}

export default TodoForm;

