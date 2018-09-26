import React from 'react';

const TodoForm = (props) => {
	return (
	  <form>
	    <input type="text" placeholder="To do list" onChange={this.handleInput}></input>
	    <button className="btn-add" onClick={props.submit}>Add ToDo</button>
	    <button className="btn-remove">Clear Finished</button>
	  </form>
	)
};

export default TodoForm;