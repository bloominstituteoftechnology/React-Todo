import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
        <div className='divform'>
            <form className='form' onSubmit={props.addTodo}>
                 <input 
                 type="text" 
                 placeholder="Enter Task Here" 
                 value={props.newTodo}
                 onChange={props.changeHandler}
                 name="newTodo"
                 />
                 <button className='btnTodo' type="submit" onClick={props.addTodo}>Add Todo</button>
                 <button className='btnClear' onClick={props.filterTask}>Clear Completed</button>
            </form>
        </div>
    );
}

export default TodoForm;