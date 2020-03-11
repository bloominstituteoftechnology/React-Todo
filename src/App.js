import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from "./components/TodoList";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [{ desc: "code", id: Date.now(), completed: false }]
    }
  }

  handleAddTodo = (desc) => {
    this.setState({ todos: [...this.state.todos, { desc, id: Date.now(), completed: false }]})
  }

  handleMarkCompleted = (id) => {
    const updatedState = this.state.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo)
    this.setState({ todos: updatedState })

  }

  handleClearCompleted = () => {
    const updatedState = this.state.todos.filter(todo => todo.completed === false)
    console.log(updatedState)
    this.setState({ todos: updatedState })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} handleMarkCompleted={this.handleMarkCompleted} handleClearCompleted={this.handleClearCompleted}/>
        <TodoForm handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
