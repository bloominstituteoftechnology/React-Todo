import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const taskList = [
	{
		task: 'finish building ToDo App',
		id: 1,
		completed: false
	},
	{
		task: 'cook dinner',
		id: 2,
		completed: false
	},
	{
		task: 'clean kitchen',
		id: 3,
		completed: false
	},
	{
		task: 'reward yourself and buy a nintendo switch',
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

	addNewTodo = e => {
		e.preventDefault();
		this.setState({
			todoList: [
				...this.state.todoList,
				{
					todoItem: this.state.todoItem,
					id: Date.now(),
					completed: false
				}
			],
			todoItem: ''
		});
	};

	render() {
		return (
			<div>
				<TodoForm
					handleChanges={this.handleChanges}
					addNewTodo={this.addNewTodo}
					todoItem={this.state.todoItem}
				/>
				<TodoList todoList={this.state.todoList} />
			</div>
		);
	}
}

export default App;
