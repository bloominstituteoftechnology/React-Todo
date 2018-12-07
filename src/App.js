import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			message: ''
		};
		this.inputText = this.inputText.bind(this);
		this.addMessage = this.addMessage.bind(this);
		this.messageCompleted = this.messageCompleted.bind(this);
		this.deleteMessage = this.deleteMessage.bind(this);
	}
	inputText = (event) => {
		this.setState({ message: event.target.value });
	};
	addMessage = (event) => {
		event.preventDefault();
		const newMessage = {
			id: Date.now(),
			message: this.state.message,
			complete: false
		};
		this.setState((prevstate) => ({
			todos: prevstate.todos.concat(newMessage),
			message: ''
		}));
	};
	messageCompleted(todoId) {
		const currentTodos = this.state.todos.map((todo) => {
			if (todoId === todo.id) todo.done = !todo.done;
			return todo;
		});
		this.setState({
			todos: [].concat(currentTodos)
		});
	}
	deleteMessage(todoId) {
		const currentTodos = this.state.todos.filter((todo) => {
			return todo.id !== todoId;
		});
		this.setState({
			todos: [].concat(currentTodos)
		});
	}

	// undo = (i) => {
	// 	let { todo } = this.state;
	// 	todo.splice(i, 1);
	// 	this.setState({ message: i.target });
	// };
	// inputText = (event) => {
	// 	this.setState({ message: event.target.value });
	// };
	// addTodo = (event) => {
	// 	event.preventDefault();
	// 	if (this.state.message) {
	// 		this.setState((mustafa) => {
	// 			return {
	// 				todo: mustafa.todo.concat([ { todo: this.state.message } ]),
	// 				message: ''
	// 			};
	// 		});
	// 	}
	// };

	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	render() {
		return (
			<div>
				<h1>MVP TODO LIST:</h1>
				<TodoForm addTodo={this.addTodo} message={this.state.message} inputText={this.inputText} />
				<TodoList todo={this.state.todo} />

				<h2>This is a test</h2>
			</div>
		);
	}
}

export default App;
