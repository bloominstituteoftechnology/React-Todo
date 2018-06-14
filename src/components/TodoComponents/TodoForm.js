import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
	<div>
	 <br /><input className={props.inputStyle}
          type="text"
	  onChange={props.inputEvent}
          placeholder="Add an Item"
	  value={props.inputValue}
        /><br />< br />
        <button className={props.buttonStyle} onClick={props.addNewItem}>Add Item</button><br /><br />
	<button className={props.buttonStyle} onClick={props.removeItem}>Remove Item</button>
	</div>  
  );
};




export default TodoForm;
