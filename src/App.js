import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ''
    };
  }

  handleInput = e => {
      this.setState({
        todo: e.target.value
      })
  }

  addTodo = e => {
    e.preventDefault();
    if (this.state.todo) {
      this.setState({
        todos: [...this.state.todos, this.state.todo],
        todo: ''
      });
    }
  };
 
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm 
          addTodo={this.addTodo}
          todo={this.state.todo}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
