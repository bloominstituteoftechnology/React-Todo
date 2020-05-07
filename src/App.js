import React, { Component } from 'react';
import TodoList from './TodoComponents/TodoList';
import TodoForm from './TodoComponents/TodoForm';
// import './TodoComponents/Todo.css';

const tasks = [
	{
		task: 'Yard Work',
		id: 1,
		completed: false,
	},
	{
		task: 'Wash Car',
		id: 2,
		completed: false,
	},
	{
		task: 'Pick up Medicine',
		id: 3,
		completed: false,
	},
	{
		task: 'Cook Dinner',
		id: 4,
		completed: false,
	},
	{
		task: 'Play Game',
		id: 5,
		completed: false,
	},
	{
		task: 'Take Medicine',
		id: 6,
		completed: false,
	},
];

class App extends Component {
	state = {
		toDoList: tasks,
	};

	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	//state changes below:

	addNewTask = (newTaskName) => {
		const newState = {
			...this.state,
			toDoList: [
				...this.state.toDoList,
				{
					task: newTaskName,
					id: Date.now(),
					completed: false,
				},
			],
		};
		this.setState(newState);
	};

	toggleCompleted = (id) => {
		const newState = {
			...this.state,
			toDoList: this.state.toDoList.map((item) => {
				if (item.id === id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			}),
		};
		this.setState(newState);
	};

	clearCompleted = () => {
		const newState = {
			...this.state,
			toDoList: this.state.toDoList.filter((item) => {
				return !item.completed;
			}),
		};
		this.setState(newState);
	};

	render() {
		return (
			<div className="appDiv">
				<div className="paper">
					<div className="pattern">
						<div className="notes">
							<h1>Daily ToDos</h1>
							<TodoList
								errands={this.state.toDoList}
								toggleCompleted={this.toggleCompleted}
							/>
						</div>
					</div>
				</div>
				<TodoForm
					addNewTask={this.addNewTask}
					clearCompleted={this.clearCompleted}
				/>
			</div>
		);
	}
}

export default App;
