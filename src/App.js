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
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
		<h1>Todo List</h1>
        <TodoList list={this.state.todos} submit={this.addTodoHandler} />
      </div>
    );
  }
}

export default App;
