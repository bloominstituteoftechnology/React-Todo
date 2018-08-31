import React from 'react';
// import './Todo.css';

function TodoForm(props) {
    return (
	<form>
	  <input id="textbox" placeholder="Enter task" value={props.inputText} onChange={props.handleInput} />
	  <button id="mybutton" onClick={props.addTodo}>Add Todo</button>
	  <button id="clearbutton" onClick={props.clearTodo}>Clear Finished</button>
	</form>
    );
    document.getElementById("textbox")
	.addEventListener("keyup", function(event) {
	    event.preventDefault();
	    if (event.keyCode === 13) {
		document.getElementById("mybutton").click();
	    }
	});
}

export default TodoForm;
