import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	state = {
		id: 1,
		todo: '',
		todos: [
			{
				task: 'Organize Garage',
				id: 1528817077286,
				completed: false,
			},
			{
				task: 'Bake Cookies',
				id: 1528817084358,
				completed: false,
			},
		],
	};

	idGen = () => {
		return Math.random();
	};

	addTodo = event => {
		event.preventDefault();
		this.setState({
			todos: [
				...this.state.todos,
				{
					task: this.state.todo,
					id: this.idGen(),
					completed: false,
				},
			],
			todo: '',
		});
	};

	toggleCompleted = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			}),
		});
	};

	clearCompleted = event => {
		event.preventDefault();
		this.setState({
			todos: this.state.todos.filter(todo => {
				return todo.completed === false;
			}),
		});
	};

	onInputChange = event => {
		this.setState({ todo: event.target.value });
	};

	render() {
		return (
			<div>
				<TodoList
					list={this.state.todos}
					toggleCompleted={this.toggleCompleted}
				/>
				<TodoForm
					todoInput={this.state.todo}
					addTodo={this.addTodo}
					clearCompleted={this.clearCompleted}
					handleChange={this.onInputChange}
				/>
			</div>
		);
	}
}

export default App;
