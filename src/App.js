import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputText: ''
    }
  }

  addTodo = event => {
    event.preventDefault();
    if(this.state.inputText) {
      this.setState({
todos: [...this.state.todos, {task: this.state.inputText, id: Date.now(), completed: false}], inputText: ''
      });
    }
  };

inputHandler = event => {
  this.setState({
    inputText: event.target.value
  });
};

completeTodo = id => {
  let todos = this.state.todos.slice();
  todos = todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed;
      return todo;
    } else {
      return todo;
    }
  });
  this.setState({ todos });
};

clearedTodo = event => {
  event.preventDefault();
  let todos = this.state.todos.slice();
  todos = todos.filter(todo => !todo.completed);
  this.setState({ todos });
}

render() {
  return (
    <div>
      <h1>Todo</h1>
      <TodoList todo4={this.state.todos} 
      handleComplete = {this.completeTodo} />
      <TodoForm
      addTodo={this.addTodo}
      inputText={this.state.inputText}
      inputHandler={this.inputHandler}
      handleClearTodos={this.clearedTodo} />
    </div>
    );
  }
}

export default App;
