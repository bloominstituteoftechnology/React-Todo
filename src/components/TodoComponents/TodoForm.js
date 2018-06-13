import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
	<div>
	 <input
          type="text"
	  onChange={props.inputEvent}
          placeholder="Add an Item"
	  value={props.inputValue}

        />
        <button onSubmit={props.addItem}>Add Item</button>
	<button>Clear Completed</button>
	</div>  
  );
};




export default TodoForm;
