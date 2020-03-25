import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			tasks: [],
			task: '',
			search: ''
		};
	}

	handleChanges = e => {
		this.setState({
			task: e.target.value
		});
	};

	handleSearch = e => {
		this.setState({
			search: e.target.value
		});
	};

	searchTask = e => {
		e.preventDefault();
		e.stopPropagation();

		let searchResult = this.state.tasks.filter(
			task => task.name.indexOf(this.state.search) !== -1
		);

		if (searchResult.length > 0) {
			this.setState({
				tasks: searchResult
			});
		}
		this.setState({
			search: ''
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
	};

	removerItem = task => {
		const tasks = [...this.state.tasks];
		let tasksToDo = tasks.filter(t => t.id !== task.id);
		this.setState({ tasks: tasksToDo });
	};

	render() {
		return (
			<main>
				<h2>Welcome to your Todo App!</h2>
				<TodoForm
					handleChanges={this.handleChanges}
					addTask={this.addTask}
					handleAddTask={this.handleAddTask}
					tasks={this.state.tasks}
					task={this.state.task}
					clearCompleted={this.clearCompleted}
					handleSearch={this.handleSearch}
					searchTask={this.searchTask}
					search={this.state.search}
				/>
				<TodoList
					tasks={this.state.tasks}
					toggleCompleted={this.toggleCompleted}
					removerItem={this.removerItem}
				/>
			</main>
		);
	}
}

export default App;
