import React, { Component } from 'react';
import ToDoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome to My Todo App',
      char: '',
      todos: [],
    }
  }
  // lets build input that will allow us to type a new todo char
  // then a button, that will add that char into our chars array
  handleNameChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitTodo = () => {
    // take this.state.char add it to an array
    // this.setState() to replace the old array
    const todos = this.state.todos;
    var todo = {
      task: this.state.char, 
      id: this.state.todos.length + 1, 
      completed: false
    };
    todos.push(todo);
    this.setState({ todos: todos, char: '' });
  };

  handleRemoveTodo = (todoId) => {
    console.log("remove ", todoId);
    const todos = this.state.todos;
    const newTodos = todos.map(todo => {
      if (todoId === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    console.log(newTodos);
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <ToDoList 
          removeTodo={this.handleRemoveTodo}
          todos={this.state.todos}  
        />
        <input
          name="char" // should be known as the state.value of the thing we update
          onChange={this.handleNameChange}
          value={this.state.char} // should be bound to the state.value of thing we update
          placeholder="New todo here"
        />
        <button onClick={this.handleSubmitTodo}>Add Todo</button>
    </div>
    );
  }
}
export default App;
