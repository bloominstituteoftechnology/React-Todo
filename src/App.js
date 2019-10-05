import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';
import data from './components/TodoComponents/data';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todo : data,
		};
	}

	toggleTodo = (e, itemId) => {
		e.preventDefault();
		this.setState({
			todo : this.state.todo.map((item) => {
				if (item.id === itemId) {
					return {
						...item,
						completed : !item.completed,
					};
				} else {
					return item;
				}
			}),
		});
	};

	clearCompleted = (e) => {
		e.preventDefault();
		this.setState({
			todo : this.state.todo.filter((item) => {
				return !item.completed;
			}),
		});
	};

	addTodo = (e, itemName) => {
		const newTodo = {
			task      : itemName,
			id        : Date.now(),
			completed : false,
		};
		this.setState({
			todo : [ ...this.state.todo, newTodo ],
		});
	};

	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList />
				<TodoForm addTodo={this.addTodo} />

				<div className='todo-list'>
					{this.state.todo.map((item) => (
						<Todo key={item.id} item={item} onClick={(e) => this.toggleTodo(e, item.id)} />
					))}

					<button className='clear-btn' onClick={this.clearCompleted}>
						Clear Completed
					</button>
				</div>
			</div>
		);
	}
}

export default App;
