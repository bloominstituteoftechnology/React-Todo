import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ClearCompleted from './components/ClearCompleted';
import './styles.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			tasks: window.localStorage.getItem('todos')
				? JSON.parse(window.localStorage.getItem('todos'))
				: [],
			currentTask: '',
			searchInput: ''
		};
	}

	componentDidUpdate() {
		window.localStorage.setItem('todos', JSON.stringify(this.state.tasks));
	}

	// ADDING TODOs //

	// capture current input and assign it to 'currentTask'

	handleChanges = e => {
		this.setState({
			currentTask: e.target.value
		});
	};

	// copy of tasks array and add current task object setting id and completed property to false //
	// reset value in the input field on form submition//

	handleAddTask = e => {
		e.preventDefault();
		e.stopPropagation();

		this.setState({
			tasks: [
				...this.state.tasks,
				{
					name: this.state.currentTask,
					id: Date.now(),
					completed: false
				}
			],
			currentTask: ''
		});
	};

	// SEARCH TO-DO LIST  //

	// capture current search input and assign it to 'searchInput' //

	handleSearch = e => {
		this.setState({
			searchInput: e.target.value
		});
	};

	searchTask = e => {
		e.preventDefault();
		e.stopPropagation();

		// filter list of tasks with searchInput value

		const searchResult = this.state.tasks.filter(
			task => task.name.indexOf(this.state.searchInput) !== -1
		);

		// only if there is a search result state is changed

		if (searchResult.length > 0) {
			this.setState({
				tasks: searchResult
			});
		}

		// reset value in the search field on form submition //

		this.setState({
			searchInput: ''
		});
	};

	// TOGGLE TODOs //

	// map over list of tasks and if the one selected is not completed set its value to true

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

	// CLEAR COMPLETED TODOs //

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
					task={this.state.currentTask}
					handleSearch={this.handleSearch}
					searchTask={this.searchTask}
					search={this.state.search}
				/>
				<TodoList
					tasks={this.state.tasks}
					toggleCompleted={this.toggleCompleted}
					removerItem={this.removerItem}
				/>
				<ClearCompleted clearCompleted={this.clearCompleted} />
			</main>
		);
	}
}

export default App;
