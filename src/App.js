import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

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

	componentDidUpdate() {
		console.log(this.state);
	}
	
	render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
				<TodoForm 
					inputText = { this.state.inputText } 
					todoList = { this.state.todoList } 
					onChangeInput = { this.onChangeInput } 
					onAddTodo = { this.onAddTodo }
				/>
      </div>
    );
  } // render()
} // App

export default App;
