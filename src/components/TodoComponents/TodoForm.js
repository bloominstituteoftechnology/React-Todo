import React from 'react';

const TodoForm = (props) => {
	return (
	  <form>
	    <input type="text" placeholder="To do list"></input>
	    <button className="btn-add">Add ToDo</button>
	    <button className="btn-remove">Clear Finished</button>
	  </form>
	)
};

export default TodoForm;