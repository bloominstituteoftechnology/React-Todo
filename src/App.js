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
    this.dataObjectUpdate(todos);
  };

  handleCompletedTodo = (todoId) => {
    const todos = this.state.todos;
    const newTodos = todos.map(todo => {
      if (todoId === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    // this.setState({ todos: newTodos });
    this.dataObjectUpdate(newTodos);
  }

  handleRemoveTodo = (todoId) => {
    let newTodos = this.state.todos;
    newTodos = newTodos.filter(todo => todoId !== todo.id);
    console.log("remove before ", newTodos);
    localStorage.setItem('todoList', JSON.stringify(newTodos));
    this.setState({ todos: newTodos });

  }

  
  initTodoList = () => {
    console.log("i was called");
    let todos = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : [];
    return todos;
  }

  dataObjectUpdate(newTodos){
    this.setState({ todos: newTodos });
    localStorage.setItem('todoList', JSON.stringify(this.state.todos))
  }

  componentDidMount() {
    console.log("render i was called");
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
