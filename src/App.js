import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

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

		if (this.state.inputText) {
			this.setState({
				todoList: [...this.state.todoList, {
					task: this.state.inputText,
					id: Date(),
					completed: false,
				}],
				inputText: '',
			});
		}
	} // onAddTodo()

	onItemClick = (e) => {
		e.preventDefault();

		if (e.target.style.textDecoration === "line-through") {
			e.target.style.textDecoration = "none";
		} else {
			e.target.style.textDecoration = "line-through";
		}

		for (let i = 0; i < this.state.todoList.length; i++) {
			if (this.state.todoList[i].id === e.target.id) {
				let newState = {...this.state};
				newState.todoList[i].completed = !newState.todoList[i].completed;

				this.setState({...newState});
				
				break;
			}
		}
	} // onItemClick()

	onClearCompleted = (e) => {
		e.preventDefault();

		let newState = {...this.state};

		for (let i = 0; i < this.state.todoList.length; i++) {
			if (this.state.todoList[i].completed) {
				newState.todoList.splice(i, 1);
				i--;
			}
		}

		this.setState({...newState});
	} // onClearCompleted()

	componentDidUpdate() {
		console.log(this.state);
	} // for debugging
	
	render() {
    return (
      <div>
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
				/>
      </div>
    );
  } // render()
} // App

export default App;
