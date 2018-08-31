import React from 'react';
// import './Todo.css';

function Todo(props) {
    function strikeThrough() {
    	    // document.getElementById(`{props.todo.id}`).style.textDecoration = "line-through";
	    console.log('clicked');
    }
    return <li style={props.todo.completed ? { textDecoration: 'line-through' }: null} onClick={() => props.completedTask(props.todo.id)}>{props.todo.added}</li>;
}

export default Todo;
