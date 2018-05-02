import React, { Component } from 'react';
import ToDoList from './components/TodoList';
import './css/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome to My Todo App',
      char: '',
      todos: this.initTodoList()
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
    let nextId = Date.now();
    var todo = {
      task: this.state.char, 
      id: nextId, 
      completed: false
    };
    if(this.state.char.length > 3)
    {
      todos.push(todo);
      this.setState({ todos: todos, char: ''});
    }
    this.dataObjectUpdate();
  };

  handleCompletedTodo = (todoId) => {
    const todos = this.state.todos;
    const newTodos = todos.map(todo => {
      if (todoId === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: newTodos });
    this.dataObjectUpdate();
  }

  handleRemoveTodo = (todoId) => {
    const todos = this.state.todos;
    const newTodos = todos.filter(todo => todoId !== todo.id);
    this.setState({ todos: newTodos });
    this.dataObjectUpdate();
  }

  
  initTodoList = () => {
    let todos = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : [];
    return todos;
  }

  dataObjectUpdate(){
    localStorage.setItem('todoList', JSON.stringify(this.state.todos))
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <input
          name="char" // should be known as the state.value of the thing we update
          onChange={this.handleNameChange}
          onKeyPress={
            (event) => {
              if(event.key === 'Enter'){
                this.handleSubmitTodo();
              }
            }
          }
          value={this.state.char} // should be bound to the state.value of thing we update
          placeholder="New todo here"
        />
        <ToDoList 
          removeTodo={this.handleRemoveTodo}
          completedTodo={this.handleCompletedTodo}
          todos={this.state.todos}  
        />
    </div>
    );
  }
}
export default App;
