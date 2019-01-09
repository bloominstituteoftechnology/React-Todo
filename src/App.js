import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const taskList = [
	{
		task: 'Something something',
		id: 1,
		completed: false
	},
	{
		task: 'Something even more',
		id: 2,
		completed: false
	},
	{
		task: 'Do more work',
		id: 3,
		completed: false
	},
	{
		task: 'a new task just for the sake of having a task',
		id: 4,
		completed: false
	}
];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoList: taskList,
			todoItem: '',
			id: ''
		};
	}

	handleChanges = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleClear() {
		console.log('Consider it cleared');
	}

	addNewTodo = e => {
		e.preventDefault();
		if (this.state.todoItem === '') {
			alert('Please enter a Todo');
		} else {
			this.setState({
				todoList: [
					...this.state.todoList,
					{
						task: this.state.todoItem,
						id: Date.now(),
						completed: false
					}
				],
				todoItem: ''
			});
		}
	};

	render() {
		return (
			<div>
				<TodoForm
					handleChanges={this.handleChanges}
					handleClear={this.handleClear}
					addNewTodo={this.addNewTodo}
					todoItem={this.state.todoItem}
				/>
				<TodoList todoList={this.state.todoList} />
			</div>
		);
	}
}

export default App;
