import React from 'react';
import './Todo.css';

const TodoForm = props => {
	return(
        <div className="TodoForm">
        	<input type="text" className='input' onKeyPress={props.evenClick} />
        	<button className='addTodo' onClick={props.bClick}>Add Todo</button>
        	<button className='clearTodo'>Clear Todo</button>
        </div>
    );
}

export default TodoForm;