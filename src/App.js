import React from 'react';
import moment from 'moment';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './App.css';

const taskList = [];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoList: taskList,
			todoItem: '',
			id: '',
			date: '',
			completed: ''
		};
	}

	handleSearch = () => {
		this.state.todoList.filter(todo => {
			if (todo.task.includes(this.todoItem)) {
				this.setState({
					todoList: todo
				});
			}
		});
	};

	handleChanges = e => {
		this.setState(
			{ [e.target.name]: e.target.value },
			this.updateLocalStorage
		);
	};

	handleCheckbox = index => {
		console.log(index);
		this.setState(
			{
				todoList: this.state.todoList.map(todo => {
					if (index !== todo.id) {
						return todo;
					} else {
						return {
							...todo,
							completed: !todo.completed
						};
					}
				})
			},
			this.updateLocalStorage
		);
	};

	handleClear = () => {
		this.setState(
			{
				todoList: this.state.todoList.filter(todo => {
					if (todo.completed === false) {
						return todo;
					} else {
						return null;
					}
					console.log(todo.completed);
				})
			},
			this.updateLocalStorage
		);
	};

	addNewTodo = e => {
		e.preventDefault();
		if (this.state.todoItem === '') {
			alert('Please enter a Todo');
		} else {
			this.setState(
				{
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
				},
				this.updateLocalStorage
			);
		}
	};

	updateLocalStorage = () => {
		localStorage.setItem('list', JSON.stringify(this.state.todoList));
	};

	loadStorage = () => {
		let value = localStorage.getItem('list');
		value = JSON.parse(value) || [];
		this.setState({ todoList: value });
	};

	componentDidMount = () => {
		this.loadStorage();
	};

	render() {
		return (
			<div className="todoApp">
				<h1>Todo App</h1>
				<TodoForm
					handleChanges={this.handleChanges}
					handleClear={this.handleClear}
					addNewTodo={this.addNewTodo}
					todoItem={this.state.todoItem}
					date={this.state.date}
					handleSearch={this.handleSearch}
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
