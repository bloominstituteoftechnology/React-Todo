import React from 'react';

 const TodoForm = (props) => {
     return (
 <div> 
        <form onSubmit = {props.addTodo}>
            <input  onChange = {props.onInputChange}type = 'text' name='task' />

            <div>
            <button type = 'submit'> Add Todo </button> 

            </div>
              </form>
            <button onClick = {props.clear} > Clear Completed</button>
            </div>
     );
 };

 export default TodoForm;