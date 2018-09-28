import React from "react";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],  // Create array to store to do data
      current_todo: "" // Create empty string for empty to do
    };
  }

  addToDo = (event) => {
    event.preventDefault();
    let populate = this.state.todos.slice();
    populate.push({task: this.state.current_todo, completed: false, id: Date.now() }); // Push the to do array data into 
    this.setState ({ // set the stat to return to empty string
      todos:populate,
      current_todo: ''
    });

  }

  toggleTodoComplete =(id)=> {
    let todos =this.state.todos.slice();
    todos = todos.map(current_todo => {
      if (current_todo.id === id) {
        current_todo.completed = !current_todo.completed;
        console.log(current_todo.completed);
        return current_todo;
      } 
      else {
        return current_todo;
      }
    });

    this.setState({ todos });
  };

   clearCompletedTodos = event => {
    event.preventDefault();
    let todos = this.state.todos.slice();
      todos = todos.filter(current_todo => !current_todo.completed);
      this.setState({ todos }); 
  };
  
   changeTodo = (event) => {
    this.setState ({
      current_todo:event.target.value
    });
   }



  render() {

    return (
      <div className ="main-container">
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        ToggleComplete={this.toggleTodoComplete}
        todos={this.state.todos} />

        <TodoForm
          value={this.state.current_todo}
          handleChange={this.changeTodo}
          handleAdd={this.addToDo}
          handleClear={this.clearCompletedTodos} 
        />
      </div>
    );
  }
}

export default App;
