import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const data = [
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
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	constructor() {
		super();
		this.state = {
			data
		};
	}

	addTask = task => {
		const newTask = {
			task: task,
			id: Date.now(),
			completed: false
		};

		this.setState({
			...this.state,
			data: [...this.state.data, newTask]
		});
	};

	toggleTask = taskId => {
		this.setState({
			...this.state,
			data: this.state.data.map(item => {
				if (taskId === item.id) {
					return {
						...item,
						completed: !item.completed
					};
				} else {
					return item;
				}
			})
		});
	};

	clearChecked = e => {
		e.preventDefault();
		this.setState({
			...this.state,
			data: this.state.data.filter(item => !item.completed)
		});
	};

	render() {
		return (
			<div>
				<div className="input__container">
					<h2>Todo List</h2>
					<TodoForm addTask={this.addTask} />
				</div>
				<TodoList clearChecked={this.clearChecked} data={this.state.data} toggleTask={this.toggleTask} />
			</div>
		);
	}
}

export default App;
