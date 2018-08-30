import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './App.css';

class App extends React.Component {
	constructor (props) {
		super (props);

		this.state = {
			inputText: '',
			todoList: [],
		}
	} // constructor()

	onChangeInput = (e) => {
		e.preventDefault();

		this.setState({
			inputText: e.target.value,
		});
	} // onChangeInput()

	onAddTodo = (e) => {
		e.preventDefault();
		// create newTodoObject with two new classes:
		// the add-item class animates it to enlarge the font-size
		// the list-item class gets rid of the dot to the left of li elements
		let newTodoObject = {
			task: this.state.inputText,
			id: Date(),
			classes: ["add-item", "list-item"],
			completed: false,
		};

		if (this.state.inputText) {
			this.setState({
				todoList: [...this.state.todoList, newTodoObject],
				inputText: '',
			});
		}
	} // onAddTodo()

	onItemClick = (e) => {
		e.preventDefault();

		let newState = {...this.state};

		for (let i = 0; i < this.state.todoList.length; i++) {
			if (this.state.todoList[i].id === e.target.id) {
				// when the id of the clicked on element(e.target) matches the id of
				// the item stored in this.state.todoList, toggle 
				// the completed flag of that stored item on and off
				newState.todoList[i].completed = !newState.todoList[i].completed;

				// when the ids match, also toggle including the 
				// "select-item-as-completed" class on the element in question
				if (newState.todoList[i].classes.includes('select-item-as-completed')) {
					newState.todoList[i].classes = newState.todoList[i].classes.filter(classItem => classItem !== 'select-item-as-completed');
				} else {
					newState.todoList[i].classes.push('select-item-as-completed');
				}
				// there will only be one element matching this id, so break here
				// after its found
				break;
			}
		}

		this.setState({...newState});
	} // onItemClick()

	onClearCompleted = (e) => {
		e.preventDefault();

		let newState = {...this.state};

		for (let i = 0; i < newState.todoList.length; i++) {

			if (newState.todoList[i].completed) {
				// if a todoList item has a completed flag set to true,
				// remove the add-item class form it and add the remove-item class
				// the remove-item class will animate it to reduce the font-size
				newState.todoList[i].classes = newState.todoList[i].classes.filter(classItem => classItem !== "add-item");
				newState.todoList[i].classes.push("remove-item");
			}	
		}

		this.setState({...newState});

		setTimeout(() => {
			// after a set amount of time (to let animation play out), filter out the
			// todoList items with a completed flag that is set to false
			let newTodoList = newState.todoList.filter(currItem => !currItem.completed)
			
			// copy this newly filtered todoList onto newState's todoList and setState
			newState.todoList = newTodoList;
			
			this.setState({...newState});
		}, 300);
	} // onClearCompleted()

	onClearAll = (e) => {
		e.preventDefault();

		let newState = {...this.state};

		for (let i = 0; i < newState.todoList.length; i++) {
			// push onto every todoList item the "remove-item" class
			// so that it animates out by reducing the font-size
			newState.todoList[i].classes.push("remove-item");
		}

		this.setState({...newState});

		setTimeout(() => {
			// after a set amount of time (to let animation play out), reset state to
			// its default empty values
			this.setState({
				inputText: '',
				todoList: [],
			});
		}, 300);
	} // onClearAll()
	
	render() {
		return (
		<div className="app-container">
			<h2>Welcome to your Todo App!</h2>
					<TodoList 
						todoList = { this.state.todoList } 
						onItemClick = { this.onItemClick } 
					/>

					<TodoForm 
						inputText = { this.state.inputText } 
						onChangeInput = { this.onChangeInput } 
						onAddTodo = { this.onAddTodo } 
						onClearCompleted = { this.onClearCompleted } 
						onClearAll = { this.onClearAll }
					/>
		</div>
		);
	} // render()
} // App

export default App;
