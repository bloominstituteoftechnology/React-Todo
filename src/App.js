import React from 'react';
/* import ReactDOM from 'react-dom';
 */
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todos = [
	{
		task: 'Meet Tilde',
		id: 152817077286,
		completed: true
	},
	{
		task: 'Kiss Tilde',
		id: 152881784358,
		completed: true
	},
	{
		task: 'Live with Tilde',
		id: 152881708358,
		completed: false
	},
	{
		task: 'Marry Tilde',
		id: 152887084358,
		completed: false
	},
	{
		task: 'Have babies with Tilde',
		id: 152881084358,
		completed: false
	},
	{
		task: 'Live happy life with Tilde',
		id: 152817084358,
		completed: false
	}
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		//initialize the state object
		this.state = {
			todosList: todos,
			life: 42
		};
	}

	//Class methods to update state go here
	//arrow function implicity bind the "this" keyword to the function

	toggleTodo = id => {
		// find the item we clicked on
		// toggle the purchased field
		// update state with the new grocery data
		const newTodoList = this.state.todosList.map(todo => {
			if (todo.id === id) {
				return {
					...todo,
					completed: !todo.completed
				};
			} else {
				return todo;
			}
		});
		//update todosList
		this.setState({
			todosList: newTodoList
		});
	};

	//Add Todo
	addTodo = todoName => {
		const newTodo = {
			task: todoName,
			id: Date.now(),
			completed: false
		};
		this.setState({
			todosList: [...this.state.todosList, newTodo]
		});
	};

	//Delete todos
	delTodo = e => {
		e.preventDefault();
		let todosList = this.state.todosList.filter(todo => !todo.completed);
		this.setState({ todosList });
	};

	// 'render' - is like a function 'return'
	//renders JSX
	render() {
		// const sortedList = this.state.groceryList.sort(
		//   (a, b) => a.purchased - b.purchased
		// );
		return (
			<div className='App'>
				<div>
					<h1>Beautiful Todos!</h1>
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

//Question
// this.toggleItem = this.toggleItem.bind(this)
