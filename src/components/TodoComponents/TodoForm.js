import React from 'react';
import './Todo.css';

const TodoForm = (props) =>{
    return(
        <form type="submit" className="todoForm">
            <input placeholder="..ToDo" value={props.value} onChange={props.change}></input>
            <button onClick={props.clickIn} className='add'>Add Task</button>
            <button onClick={props.clickOut} className='remove'>Clear completed</button>
        </form>
    );
}
export default TodoForm;