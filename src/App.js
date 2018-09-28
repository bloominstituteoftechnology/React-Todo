import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoList: [],
			inputText: ''
		};
	}
	toggleComplete = (id )=> {
    let tempTodos = this.state.todoList 
      tempTodos.map (todo => {
      if (todo.id === id){
        todo.completed = !todo.completed;
        return todo;

      } else {
        return todo;
      }
    });
    this.setState({todoList: tempTodos})
	};

	clearList = event => {
		event.preventDefault();
		this.setState({
			todoList: []
		});
	};
	addToList = event => {
		event.preventDefault();
		let newArray = this.state.todoList;
		let newTodo = {
			task: this.state.inputText,
			id: Date.now(),
			completed: false
		};
		newArray.push(newTodo);
		this.setState({
			todoList: newArray,
			inputText: ''
		});
	};

	changeUserInput = event => {
		this.setState({ inputText: event.target.value });
	};

	render() {
		return (
			<div>
				<h1>Michaels Awesome To-Do List</h1>
				<TodoForm
					className="toDoList"
					addToList={this.addToList}
					userInput={this.state.inputText}
					changeUserInput={this.changeUserInput}
					inputText={this.state.inputText}
          clearList={this.clearList}
          id = {this.state.id}
					
				/>
        <TodoList list={this.state.todoList} id={this.state.id} toggleComplete={this.toggleComplete} />
			</div>
		);
	}
}

export default App;
