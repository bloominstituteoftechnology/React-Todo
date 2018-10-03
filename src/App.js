import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }
  handleNewToDo = e => {
    e.preventDefault();
    const task = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    };

    this.setState({ todos: [...this.state.todos, task] });
  };

  handleInputChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <TodoForm
          handleNewToDo={this.handleNewToDo}
          handleInputChange={this.handleInputChange}
        />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
