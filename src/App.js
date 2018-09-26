import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
	constructor() {
		super();
		
		this.state = {
			todos: [
				{
				 task: "Test",
				 id: 1234050,
				 completed: false
				}
			]
		}
	}
	
	addTodoHandler = (event) => {
		event.preventDefault(); 
		// prevents submit from refreshing
		const input = event.target.previousElementSibling.value;
		//Grabs the value from input tag
		const id = Date.now();
		//Creating the unique ID for Todos
		return this.addTodoObject(input, id);
	};
	
	addTodoObject = (value, id) => {
		const ToDo = {
			task: `${value}`,
			id: id,
			completed: false
		};
		
		const todos = this.state.todos;
		todos.push(ToDo);
		//Adding the object to our Class state
		this.setState({todos});
		//set state of this.state.todos with the new object
	}
	
	completedTask = (event) => {
        const clickedTodo = event.target;
		console.log('I am completed');
		//Getting the element that has been clicked
		const todosCompleted = this.state.todos.map((todo, index) => {
				if (clickedTodo.id === todo.id) {
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
