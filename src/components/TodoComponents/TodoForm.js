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
        <button onClick={props.addNewItem}>Add Item</button>
	<button onClick={props.removeItem}>Clear Completed</button>
	</div>  
  );
};




export default TodoForm;
