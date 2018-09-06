import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			task: '',
			todos: [],
		};
	}

	todoChange = (event) => {
		this.setState({ task: event.target.value });
	};

	submitHandler = (e) => {
		e.preventDefault();
		const { todos, task } = this.state;
		this.setState({
			todos: [{ task: task, id: Date.now(), completed: false }, ...todos],
			task: '',
		});
	};

	// Completed - Click
	todoClick = (search) => {
		const filteredTodos = this.state.todos.map((todo) => {
			if (todo.id === search.id) todo.completed = !todo.completed;
			return todo;
		});
		this.setState({
			todos: filteredTodos,
		});
	};

	// Clear Todo
	removeTodos = () => {
		const newTodos = this.state.todos.filter((todo) => {
			return todo.completed === false;
		});
		this.setState({
			todos: newTodos,
		});
	};

	render() {
		return (
			<div>
				<h1>Today's Todo List</h1>
				<TodoForm
					value={this.state.task}
					todos={this.state.todos}
					onChange={this.todoChange}
					onSubmit={this.submitHandler}
					deleteTodo={this.removeTodos}
				/>
				<TodoList
					todos={this.state.todos}
					task={this.state.task}
					todoClick={this.todoClick}
				/>
			</div>
		);
	}
}

export default App;
