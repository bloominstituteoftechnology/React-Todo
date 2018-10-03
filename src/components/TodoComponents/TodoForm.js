import React from 'react';

const TodoForm = (props) => {
	return (
	  <form className="form">
	    <input type="text" placeholder="ToDo list" value={props.value} onChange={props.change}></input>
		<div className="buttons">
	    	<button className="btn-add" onClick={props.submit}>Add ToDo</button>
	    	<button className="btn-remove" onClick={props.remove}>Clear Finished</button>
	    </div>
	  </form>
	)
};

export default TodoForm;