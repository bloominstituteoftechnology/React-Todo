import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      current: '',
    };
  }

  handleInputChange = e => {
    this.setState({current: e.target.value});
  }

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.concat([{
        task: this.state.current,
        id: Date.now(),
        completed: false,
        current: '',
      }]),
    });
  };

  render() {
    return (
      <div>
        <TodoList todoArr={this.state.todos} />
        <TodoForm onInputChange={this.handleInputChange} onSubmit={this.addTodo} />
      </div>
    );
  }
}

export default App;
