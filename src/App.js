import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			controlledText: '',
			todos: [
				{
					task: 'Organize Garage',
					id: 1528817077286,
					completed: false
				},
				{
					task: 'Bake Cookies',
					id: 1528817084358,
					completed: true
				}
			]
		};
	}

	handleChange = event => {
		this.setState({
			controlledText: event.target.value
		});
	};

	handleNew = event => {
		event.preventDefault();
		let newtodos = this.state.todos.slice();
		newtodos.push({
			task: this.state.controlledText,
			id: Date.now(),
			completed: false
		});
		this.setState({
			todos: newtodos,
			controlledText: ''
		});
	};

	handleClick = event => {
		console.log('hello');
	};

	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<div>
					<TodoList todos={this.state.todos} handleClick={this.handleClick} />
				</div>
				<TodoForm
					handleChange={this.handleChange}
					val={this.state.controlledText}
					handleNew={this.handleNew}
				/>
			</div>
		);
	}
}

export default App;
