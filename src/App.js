import React from 'react';
import moment from 'moment';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './App.css';

const taskList = [
	{
		task: 'Task one',
		id: 1,
		date: moment().format('MMM Do YYYY'),
		completed: true
	},
	{
		task: 'Task two',
		id: 2,
		date: moment().format('MMM Do YYYY'),
		completed: false
	},
	{
		task: 'Task three',
		id: 3,
		date: moment().format('MMM Do YYYY'),
		completed: false
	},
	{
		task: 'Task four',
		id: 4,
		date: moment().format('MMM Do YYYY'),
		completed: false
	}
];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoList: taskList,
			todoItem: '',
			id: '',
			date: ''
		};
	}

	handleChanges = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleCheckbox = e => {
		console.log(e.target.checked);
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
						completed: false,
						date: moment().format('MMM Do YYYY')
					}
				],
				todoItem: ''
			});
		}
	};

	render() {
		return (
			<div className="todoApp">
				<TodoForm
					handleChanges={this.handleChanges}
					handleClear={this.handleClear}
					addNewTodo={this.addNewTodo}
					todoItem={this.state.todoItem}
					date={this.state.date}
				/>
				<TodoList
					todoList={this.state.todoList}
					handleCheckbox={this.handleCheckbox}
				/>
			</div>
		);
	}
}

export default App;
