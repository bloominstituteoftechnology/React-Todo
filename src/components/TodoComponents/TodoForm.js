import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
	<div>
	 <input
          type="text"
          placeholder="Add an Item"
        />
        <button>Add Item</button>
	<button>Clear Completed</button>
	</div>  
  );
};




export default TodoForm;
