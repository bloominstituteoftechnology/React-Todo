import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			tasks: [],
			task: ''
		};
	}
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	handleChanges = e => {
		this.setState({
			task: e.target.value
		});
	};

	addTask = task => {
		this.setState({
			tasks: [
				...this.state.tasks,
				{
					name: task,
					id: Date.now(),
					completed: false
				}
			]
		});
	};

	handleAddTask = e => {
		e.preventDefault();
		e.stopPropagation();
		this.addTask(this.state.task);
		this.setState({
			task: ''
		});
	};

	toggleCompleted = taskID => {
		this.setState({
			tasks: this.state.tasks.map(task => {
				if (task.id === taskID) {
					return {
						...task,
						completed: !task.completed
					};
				}
				return task;
			})
		});
	};

	clearCompleted = () => {
		this.setState({
			tasks: this.state.tasks.filter(task => !task.completed)
		});
		console.log(this.state.tasks);
	};

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoForm
					handleChanges={this.handleChanges}
					addTask={this.addTask}
					handleAddTask={this.handleAddTask}
					tasks={this.state.tasks}
					task={this.state.task}
					clearCompleted={this.clearCompleted}
				/>
				<TodoList tasks={this.state.tasks} toggleCompleted={this.toggleCompleted} />
			</div>
		);
	}
}

export default App;
