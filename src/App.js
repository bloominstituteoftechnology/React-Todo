import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './App.css';

const todoList = [
	{
		task: 'Organize Garage',
		id: 1528817077286,
		completed: false
	},
	{
		task: 'Bake Cookies',
		id: 1528817084358,
		completed: false
	},
	{
		task: 'Study Class Components',
		id: 152881751447,
		completed: false
	}
];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoList: todoList,
			task: ''
		};
	}
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	inputChangeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	formSubmitHandler = (event) => {
		event.preventDefault();
		this.setState((prevState) => {
			return {
				todoList: [
					...prevState.todoList,
					{
						completed: false,
						id: Date.now(),
						task: prevState.task
					}
				],
				task: ''
			};
		});
	};

	toggleTask = (taskId) => {
		this.setState((prevState) => {
			return {
				todoList: prevState.todoList.map((taskItem) => {
					if (taskItem.id === taskId) {
						return {
							task: taskItem.task,
							id: taskItem.id,
							completed: !taskItem.completed
						};
					} else {
						return taskItem;
					}
				})
			};
		});
	};

	clearCompleted = () => {
		this.setState((prevState) => {
			return {
				todoList: prevState.todoList.filter((taskItem) => {
					return !taskItem.completed;
				})
			};
		});
	};

	clearAll = () => {
		this.setState((prevState) => {
			return {
				todoList: prevState.todoList.filter((taskItem) => {
					return taskItem.completed;
				})
			};
		});
	};
	render() {
		return (
			<div className="app">
				<div className="notepad">
					<div className="topSection">
						<div className="header">
							<h1>Todo List</h1>
						</div>
						<div className="todoForm">
							<TodoForm
								task={this.state.task}
								inputChangeHandler={this.inputChangeHandler}
								formSubmitHandler={this.formSubmitHandler}
							/>
							<button className="clear" onClick={this.clearCompleted}>
								Clear Completed
							</button>
							<button className="clear" onClick={this.clearAll}>
								Clear All
							</button>
						</div>
					</div>
					<TodoList todoList={this.state.todoList} toggleTask={this.toggleTask} />
				</div>
			</div>
		);
	}
}

export default App;
