import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
	constructor(){
		super();
    
		this.state = {
			todoItems: [
			{
				task: '',
				id: 0,
				completed: false
			}
		],
		inputText: ''
		}
	}
	updateInput = (event) => {
		this.setState({
			inputText: event.target.value
		})
	}
	updateTodo = (event) => {
		event.preventDefault();
		this.setState({
			todoItems: [...this.state.todoItems, {
			task: this.state.inputText,
			id: Date.now(),
			completed: false
		}],
		inputText: ''
		})
	}
	toggleTodo = (event) => {
		let todoItems = [...this.state.todoItems]; 
		todoItems.forEach(todoItem => {
			if(todoItem.id === event.target.parentNode.id){
				todoItem.completed = true;
			}});
			this.setState({
				todoItems: [...todoItems]
			})
		}
clearCompleted = (event) => {
			this.todoItems === this.state;
	}
	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList 
					todoItems= {this.state.todoItems} 
					inputText = {this.state.inputText} 
					updateInput = {this.updateInput} 
					updateTodo = {this.updateTodo} 
					toggleTodo = {this.toggleTodo}
			/>
			</div>
		);
	}
}

export default App;
