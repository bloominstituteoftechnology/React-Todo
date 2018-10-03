import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  addTodoHandler = (event) => {
		event.preventDefault(); 
		const input = event.target.previousElementSibling.value;
		const id = Date.now();
		const TodoItem = {
			task: `${input}`,
			id: id,
			completed: false
		};	
		const todos = this.state.todos;
		todos.push(TodoItem);
		this.setState({todos, task: ''});
	};

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <TodoList item={this.state.todos} complete={this.completeToggle} />
        <TodoForm submit={this.addTodoHandler} remove={this.removeComplete} c/>
      </div>
    )
  }
}

export default App;
