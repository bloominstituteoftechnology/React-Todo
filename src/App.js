import React, { Component } from 'react';
// import TodoList from './components/TodoList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      todos: []
    };
  }

  todoInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  submitTodo = event => {
    event.preventDefault();
    const todos = this.state.todos; //const { todos } = this.state;
    const myTodo = { name: this.state.todo, completed: false};
    todos.push(myTodo);
    this.setState( {todos: todos, todo: ''});
  };


  render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        <form onSubmit={this.submitTodo}>
          <input 
            name='todo'
            placeholder='add todo item'
            value={this.state.todo}
            onChange={this.todoInput}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
      )
  }
}


export default App;
