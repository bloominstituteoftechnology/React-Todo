import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import Todo from "./components/TodoComponents/Todo";
// import TodoForm from "./components/TodoComponents/TodoForm";

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
			id: "",
			completed: ""
		};
	}

	render() {
		return (
			<div className='ToDo-wrapper'>
				<h1>Todo List: App</h1>

				<div className='ToDo-list'>
					<TodoList todoState={this.state} />
				</div>
			</div>
		);
	}
}

export default App;
