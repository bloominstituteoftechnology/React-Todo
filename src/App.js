import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
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

	addTodo = event => {
		event.preventDefault();
		this.setState({
			todos: [
				...this.state.todos,
				{
					task: this.state.todo,
					id: 2,
					completed: false,
				},
			],
			todo: '',
		});
	};

	onInputChange = event => {
		this.setState({ todo: event.target.value });
	};

	render() {
		return (
			<div>
				<TodoList list={this.state.todos} />
				<TodoForm
					todoInput={this.state.todo}
					addTodo={this.addTodo}
					handleChange={this.onInputChange}
				/>
			</div>
		);
	}
}

export default App;
