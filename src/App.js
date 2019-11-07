import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [
				{
					task: 'Organize Garage',
					id: 1528817077286,
					completed: false
				},
				{
					task: 'Bake Cookies',
					id: 1528817084358,
					completed: false
				}
			],
			todo: ''
		};
	}

	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	handleOnChange = e => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};

	handleAddTodo = e => {
		e.preventDefault();
		const newTodo = { task: this.state.todo, id: Date.now(), completed: false };
		this.setState({
			todos: [...this.state.todos, newTodo],
			todo: ''
		});
	};

	handleTodoCompleted = id => {
		let todos = this.state.todos.slice();
		todos = todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
				return todo;
			} else {
				return todo;
			}
		});
		this.setState({ todos });
	};

	render() {
		return (
			<div>
				<TodoList
					todos={this.state.todos}
					handleTodoCompleted={this.handleTodoCompleted}
				/>
				<TodoForm
					value={this.state.todo}
					handleAddTodo={this.handleAddTodo}
					handleOnChange={this.handleOnChange}
				/>
			</div>
		);
	}
}

export default App;
