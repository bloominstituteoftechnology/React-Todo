import React from 'react';
import './Todo.css';



const TodoForm = (props) => {

        return (
            <div className='form-wrapper'>
            
               <input onChange = {props.handleChange} className='todo-input' type='text' name = 'task' value = {props.task} placeholder=' type your todo here...' /> 
               <button onClick = {props.addToDo} className='add-todo'>Add Todo</button>
               <button onClick = {props.clearComplete} className='clear'>Clear Completed</button>
               
            </div>
        );
    }

export default TodoForm;
