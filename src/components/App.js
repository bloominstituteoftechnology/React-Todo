import React, {Component} from 'react';
import TodoList from "./Todolist";
import NewTodo from "./NewTodo";
import '../css/index.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
		};
	}

	addNewTodo = (item) => {
		this.setState({ todo: item });
	}

	render() {
		return (
		<div>
			<h1>Keep Track of your Todos:</h1>
			<TodoList todo={this.state.todo}/>
			<NewTodo add={this.addNewTodo} />
		</div>
		);
	}
}

export default App;
