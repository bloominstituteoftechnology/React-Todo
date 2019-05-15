import React from 'react';

 const TodoForm = (props) => {
     return (

        <form onSubmit = {props.addTodo}>
            <input  onChange = {props.onInputChange}type = 'text' name='task' />
            <button type = 'submit'> Add Todo </button> 
            <button> Clear Completed</button>
            </form>
     );
 };

 export default TodoForm;