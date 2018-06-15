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
	
	<input className={props.inputStyle}
          type="text"
	  //onChange={this.props.inputEvent(e); this.props.enterKeyPress(e)}
	onChange={props.searchInput}
         //onChange={props.enterKeyPress}
          placeholder="Search Items"
          value={props.inputValueSearch}
        /><br />< br />
	
	<button className={props.buttonStyle} onClick={props.enterKeyPress}>Search</button><br /><br />  
        <button className={props.buttonStyle} onClick={props.addNewItem}>Add Item</button><br /><br />
	<button className={props.buttonStyle} onClick={props.removeItem}>Remove Item</button>
	</div>  
  );
};




export default TodoForm;
