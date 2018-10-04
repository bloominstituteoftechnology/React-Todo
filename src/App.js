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
					completed: false
				}
			]
		};
	}

	//handleclick

	//handleChange
	handleChange = event => {
		this.setState({
			controlledText: event.target.value
		});
	};

	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<div>
					<TodoList todos={this.state.todos} />
				</div>
				<TodoForm
					handleChange={this.handleChange}
					val={this.state.controlledText}
				/>
			</div>
		);
	}
}

export default App;
