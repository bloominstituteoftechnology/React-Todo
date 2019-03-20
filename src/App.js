import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";

const todos = [
	{
		task: "Organize Garage",
		id: 1528817077286,
		completed: false
	},
	{
		task: "Bake Cookies",
		id: 1528817084358,
		completed: false
	}
];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoOGList: todos,
			task: "",
			id: Date.now(),
			completed: ""
		};
	}

	handleChanges = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	addToList = event => {
		event.preventDefault();
		const newTodo = {
			task: this.state.task,
			id: Date.now(),
			completed: false
		};

		this.setState({
			todoOGList: [...this.state.todoOGList, newTodo]
		});
	};

	render() {
		return (
			<div className='ToDo-wrapper'>
				<h1>Todo List: App</h1>

				<div className='ToDo-list'>
					<TodoList todoState={this.state} />
				</div>
				<TodoForm
					task={this.state.task}
					id={Date.now()}
					handleChanges={this.handleChanges}
					addToList={this.addToList}
				/>
			</div>
		);
	}
}

export default App;
