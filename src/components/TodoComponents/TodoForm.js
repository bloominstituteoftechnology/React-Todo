import React from 'react';
import './Todo.css';

const TodoForm = props => {
	return(
        <div className="TodoForm">
        	<input type="text" className='input' onChange={props.addTodo} />
        	<button className='addTodo' >Add Todo</button>
        	<button className='clearTodo'>Clear Todo</button>
        </div>
    );
}

export default TodoForm;