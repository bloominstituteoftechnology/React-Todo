import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
	state = {
		todos: [],

		newTodo: '',
	};
	// fires everytime when user type something
	handleInput = (event) => {
		// assign input value to new todo
		this.setState({
			newTodo: event.target.value
		});
	}
	// when user click submit or hit enter
	submitTodo = (event) => {
		// prevent page from refreshing
		event.preventDefault();
		// make a copy of todos
		const todos = this.state.todos;
		// push in new todo
		todos.push({
			task: this.state.newTodo,
			complete: false
		});
		// set state
		this.setState({
			todos: todos,
			newTodo: '',
		});
	}
	// toggleTask method to handle click to strike through
	// this method will be passed as a prop to the child component
	toggleTask = (event) => {
		// copy current todos
		const temp = this.state.todos;

		temp.forEach((todo)=>{
			// assign true of false to todo complete
			if(todo.task === event.target.innerText){
				if(todo.complete === false){
					todo.complete = true;
				}else{
					todo.complete = false;
				}
			}
		// set state to update todo complete
		this.setState({todos: temp});
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.submitTodo}>
				<input value={this.state.newTodo} onChange={this.handleInput}></input><button>Add Todo</button>
				</form>

				<Todo todos={this.state.todos} toggleTask={this.toggleTask}/>				
			</div>
		)
	}
}

export default TodoList;