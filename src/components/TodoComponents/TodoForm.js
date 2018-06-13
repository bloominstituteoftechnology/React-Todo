import React from 'react';
import './Todo.css';



const TodoForm = () => {

        return (
            <div className='form-wrapper'>
            <form >
               <input className='todo-input' type='text' placeholder=' type your todo here...'/> 
               <button className='add-todo'>Add Todo</button>
               <button className='clear'>Clear Completed</button>
                </form>
            </div>
        );
    }

export default TodoForm;
