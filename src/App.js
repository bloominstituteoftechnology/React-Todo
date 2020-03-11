import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from "./components/TodoList";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  handleAddTodo = (desc) => {
    this.setState({ todos: [...this.state.todos, { desc, id: this.state.todos.length + 1 }]})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
