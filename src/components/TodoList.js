import React from 'react';
import Todo from './Todo';

// initial session todos
let sessionTodos = null;
// if there's todos in session storage and it's not an empty array
if(sessionStorage.todos && sessionStorage.todos !== "[]"){
	// retreive the todos in session storage as a string
	let stringTodos = sessionStorage.getItem('todos');
	// parse todo string to an array and assgin it to sessionTodos
	sessionTodos = JSON.parse(stringTodos);
}else{
	// if session storage is undefined then set it to an empty array as a string
	sessionStorage.setItem('todos', JSON.stringify([]));
	// retrieve the todos as a string
	let stringTodos = sessionStorage.getItem('todos');
	// assign it to sessionTodos
	sessionTodos = JSON.parse(stringTodos);
}

class TodoList extends React.Component {
	// initialize state
	state = {
		todos: sessionTodos,
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
			if(this.state.newTodo != '' ){
			// make a copy of todos
			const todos = this.state.todos;
			// push in new todo
			todos.push({
				task: this.state.newTodo,
				complete: false,
				id: (this.state.todos.length + 1).toString(),
			});
			sessionStorage.setItem('todos', JSON.stringify(todos));
			// set state
			this.setState({
				todos: todos,
				newTodo: '',
			});

		}
				
			
	}
	// toggleTask method to handle click to strike through
	// this method will be passed as a prop to the child component
	toggleTask = (id) => {
		// copy current todos
		const temp = this.state.todos;
		temp.forEach((todo)=>{

			// assign true of false to todo complete
			if(todo.id === id){

				if(todo.complete === false){
					todo.complete = true;
				}else{
					todo.complete = false;
				}
			}
		});
		// set state to update todo complete
		this.setState({todos: temp});
	}

	removeTask = (id) => {

		const temp = this.state.todos;

		temp.forEach((todo, i) => {
			if(todo.id === id){

				temp.splice(i, 1);
			}
		});
		// set session storage todos to the updated state
		sessionStorage.setItem('todos', JSON.stringify(temp));
		// update state
		this.setState({todos: temp});
	}

	render() {
		return (
			<div className="todo-list">
				<form onSubmit={this.submitTodo}>
				<input placeholder="Enter todo..." value={this.state.newTodo} onChange={this.handleInput}></input><br />
				<button>Add Todo</button>
				</form>

				<Todo todos={this.state.todos} toggleTask={this.toggleTask} removeTask={this.removeTask} />				
			</div>
		)
	}
}

export default TodoList;