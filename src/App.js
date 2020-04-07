import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const todos = [
	{
		task: 'groceries',
		id: 16364802857773,
    completed: false
}
];

class App extends React.Component {
	constructor() {
		super();
		//initialize the state object
		this.state = {
			todosList: todos,
		};
	}

	toggleTodo = id => {
		const moreThingsToDo = this.state.todosList.map(todo => {
			if (todo.id === id) {
				return {
					...todo,
					completed: !todo.completed
				};
			} else {
				return todo;
			}
    });
    
		this.setState({
			todosList: moreThingsToDo
		});
	};

	//Add Todo
	addTodo = (todoName) => {
		const newTodo = {
			task: todoName,
			id: Date.now() * 5000 +1 ,
			completed: false
		};
		this.setState({
			todosList: [...this.state.todosList, newTodo]
		});
	};

	delTodo = e => {
		e.preventDefault();
		let todosList = this.state.todosList.filter(todo => !todo.completed);
		this.setState({ todosList });
	};

	render() {
		return (
			<div>
				<div>
					<h1>Todo App!</h1>
				</div>
				<TodoForm addTodo={this.addTodo} />
				<TodoList
					todos={this.state.todosList}
					toggleTodo={this.toggleTodo}
					delTodo={this.delTodo}
				/>
			</div>
		);
	}
}

export default App;
