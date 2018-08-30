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

		// newTodoObject was created so you can reference it in the setTimeout()
		// and animate it after adding it to the state
		let newTodoObject = {
			task: this.state.inputText,
			id: Date(),
			completed: false,
		};

		if (this.state.inputText) {
			this.setState({
				todoList: [...this.state.todoList, newTodoObject],
				inputText: '',
			});

			// add-item class add a fade in type of animation
			setTimeout(() => {
				document.getElementById(newTodoObject.id).classList.add("add-item");
			}, 0);
		}
	} // onAddTodo()

	onItemClick = (e) => {
		e.preventDefault();

		// toggle line-through and list-style-image(check mark) on and off for target element
		if (e.target.style.textDecoration === "line-through") {
			document.getElementById(e.target.id).classList.remove("select-item-as-completed")
			e.target.style.textDecoration = "none";
		} else {
			e.target.style.textDecoration = "line-through";
			document.getElementById(e.target.id).classList.add("select-item-as-completed")
		}

		// toggle completed flag (true or false) for todoList member with
		// same id property as target element
		for (let i = 0; i < this.state.todoList.length; i++) {
			if (this.state.todoList[i].id === e.target.id) {
				let newState = {...this.state};
				newState.todoList[i].completed = !newState.todoList[i].completed;

				this.setState({...newState});
				
				// there will only be one element matching this id, so break here
				break;
			}
		}
	} // onItemClick()

	onClearCompleted = (e) => {
		e.preventDefault();

		let newState = {...this.state};

		for (let i = 0; i < newState.todoList.length; i++) {
			if (newState.todoList[i].completed) {
				// if a todoList item has been flagged as completed, give it a
				// remove-item class which animates it to fade out
				document.getElementById(newState.todoList[i].id).classList.remove("add-item");
				document.getElementById(newState.todoList[i].id).classList.add("remove-item");
			}
		}

		setTimeout(() => {
			// after 1 second (time it takes to animate fade out), filter out the
			// todoList items with a completed flag that is set to false
			let newTodoList = newState.todoList.filter(currItem => !currItem.completed)
			
			// copy this newly filtered todoList onto newState's todoList and setState
			newState.todoList = newTodoList;
			
			this.setState({...newState});
		}, 1000);
	} // onClearCompleted()

	onClearAll = (e) => {
		e.preventDefault();

		// select all elements with a list-item class (which will be all <li> elements) and
		// add a remove-item class to them in order to animate them all out
		document.querySelectorAll(".unordered-list .list-item").forEach(li => li.classList.add("remove-item"));

		setTimeout(() => {

			// after 1 second (time it takes to animate fade out) reset state to
			// its default empty values
			this.setState({
				inputText: '',
				todoList: [],
			});
		}, 1000);
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
