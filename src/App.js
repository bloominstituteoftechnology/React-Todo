import React from "react";
import shortid from "shortid";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			newTodo: "",
			todos: [],
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			todos: [
				...this.state.todos,
				{ task: this.state.newTodo, id: shortid.generate(), completed: false },
			],
			newTodo: "",
		});
	};

	handleClearAll = (e) => {
		e.preventDefault();
		this.setState({
			todos: [],
		});
	};

	handleComplete = (id, checked) => {
		console.log(id, checked);
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: checked };
				} else {
					return todo;
				}
			}),
		});
	};

	handleClearCompleted = (e) => {
		e.preventDefault();
		this.setState({
			todos: this.state.todos.filter((todo) => !todo.completed),
		});
	};

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoForm
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					handleClearAll={this.handleClearAll}
					handleClearCompleted={this.handleClearCompleted}
					newTodo={this.state.newTodo}
				/>
				<TodoList
					list={this.state.todos}
					handleComplete={this.handleComplete}
				/>
			</div>
		);
	}
}

export default App;
