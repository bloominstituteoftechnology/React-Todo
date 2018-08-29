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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm 
          addTodo={this.addTodo}
          inputText={this.state.todo}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
