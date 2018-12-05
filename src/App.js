import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			message: '',
			todo: []
		};
	}
	inputText = (event) => {
		this.setState({ message: event.target.value });
	};
	addTodo = (event) => {
		event.preventDefault();
		if (this.state.message) {
			this.setState({
				todo: [ { todo: this.state.message } ],
				message: ''
			});
		}
	};

	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	render() {
		return (
			<div>
				<h1>MVP TODO LIST:</h1>
				<TodoForm addTodo={this.addTodo} message={this.state.message} inputText={this.inputText} />
				<TodoList todo={this.state.todo} />

				<h2>This is a test</h2>
			</div>
		);
	}
}

export default App;
