import React from "react";


function Todo(props){
	return (
		<li id={props.id} className={props.classes.join(" ")} onClick={props.toggle}>{props.task}</li>
	);
}


export default Todo;