import React from 'react';
import SplitText from 'react-pose-text';

import './styles/css/index.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	state = {
		id: 1,
		todo: '',
		todos: [
			{
				task: 'Organize Garage',
				id: 1528817077286,
				completed: false,
			},
			{
				task: 'Bake Cookies',
				id: 1528817084358,
				completed: false,
			},
		],
	};

	idGen = () => {
		return Math.random();
	};

	addTodo = event => {
		event.preventDefault();
		this.setState({
			todos: [
				...this.state.todos,
				{
					task: this.state.todo,
					id: this.idGen(),
					completed: false,
				},
			],
			todo: '',
		});
	};

	toggleCompleted = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			}),
		});
	};

	clearCompleted = event => {
		event.preventDefault();
		this.setState({
			todos: this.state.todos.filter(todo => {
				return todo.completed === false;
			}),
		});
	};

	onInputChange = event => {
		this.setState({ todo: event.target.value });
	};

	render() {
		const charPoses = {
			exit: { opacity: 0, y: 20 },
			enter: {
				opacity: 1,
				y: 0,
				delay: ({ charIndex }) => charIndex * 90,
			},
		};
		return (
			<div className="app">
				<header className="title">
					<h1>
						<SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
							TO-DO LIST
						</SplitText>
					</h1>
				</header>
				<TodoForm
					todoInput={this.state.todo}
					addTodo={this.addTodo}
					clearCompleted={this.clearCompleted}
					handleChange={this.onInputChange}
				/>
				<TodoList
					list={this.state.todos}
					toggleCompleted={this.toggleCompleted}
				/>
			</div>
		);
	}
}

export default App;
