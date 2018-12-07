import React from 'react';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from './Todo.js'

class ToDoList extends React.Component {

	fullyCompleted = (currentSelected) => {
	    // console.log("hi")
		this.props.fullyCompleted(currentSelected);

  	}



	render() {	
		return (

	        <ul>
	          {this.props.todos.map( todo => {
	            return <Todo 
	            	key={todo.id} 
	            	task={todo.task} 
	            	status = {todo.status}
	            	fullyCompleted = {this.fullyCompleted}/>
	          })}
	        </ul>
		)
	}
}

export default ToDoList;