import React from 'react';
import './Todo.css';



const TodoForm = (props) => {

        return (
            <div className='form-wrapper'>
               <form onSubmit = {props.addToDo}>
               <input onChange = {props.handleChange} className={props.value.length > 0 ? 'todo-input' : 'todo-input heartbeat'} type='text' name = 'task' value={props.value} placeholder=' ready for blast-off...' /> 
               <div className='button-flex'>
               <button onClick = {props.addToDo} className={props.value.length > 0 ? 'add-todo' : 'add-todo disabled'} >Add Todo</button>
               <button onClick = {props.clearComplete} className='clear'>Clear Completed</button>
               </div>
               </form>
            </div>
        );
    }

export default TodoForm;
