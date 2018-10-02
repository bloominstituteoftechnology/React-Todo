import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './app.css';
class App extends React.Component {
  // you will need a place to store your state in this component.
	constructor() {
		super();
		
		this.state = {
			todos: [
				
			]
		}
	}
	
	addTodoObject = (value, id) => {
		
	}
	
	addTodoHandler = (e) => {
		e.preventDefault(); 
		// prevents submit from refreshing
		const input = e.target.previousElementSibling.value;
		//Grabs the value from input tag
		const id = Date.now();
		//Creating the unique ID for Todos
		const ToDo = {
			task: `${input}`,
			id: id,
			completed: false
		};
		
		const todos = this.state.todos;
		todos.push(ToDo);
		//Adding the object to our Class state
		this.setState({todos});
		//set state of this.state.todos with the new object
	};
	
	
	
	completedTask = (e) => {
        const clickedTodo = e.target;
		//Getting the element that has been clicked
		const todosCompleted = this.state.todos.map((todo, index) => {
				if (Number(clickedTodo.id) === todo.id) {
			    //Had to use Number() to convert the id of the clicked.id from a string to a number to be able to check against todo.id
					clickedTodo.classList.toggle('completed');
					todo.completed = !todo.completed;
				}
			return todo;
		});
		//This is making an array using map for the completed items. Which then will be used to delete.
		this.setState({todosCompleted});
	}
		
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
		<h1>Todo List</h1>
        <TodoList items={this.state.todos} submit={this.addTodoHandler} completedTask={this.completedTask}/>
      </div>
    );
  }
}

export default App;
