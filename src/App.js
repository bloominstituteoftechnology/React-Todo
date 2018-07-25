import React, {Component} from 'react';
import './components/TodoComponents/Todo.css';
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

  handleItemClick = e => {
    e.target.classList.toggle('completed');
    
    let newTodo = this.state.todos.slice();
    for (let item of newTodo) {
      if (item.id === +e.target.dataset.id) {
        item.completed = !item.completed;
        this.setState({
          todos: newTodo,
        });
      }
    }
  };

  handleInputChange = e => {
    this.setState({current: e.target.value});
  };

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.concat([{
        task: this.state.current,
        id: Date.now(),
        completed: false,
      }]),
    });
  };

  clearTodo = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(item => item.completed === false),
    });
  };

  render() {
    return (
      <div>
        <TodoList todoArr={this.state.todos} onItemClick={this.handleItemClick} />
        <TodoForm onInputChange={this.handleInputChange} onSubmit={this.addTodo} onClear={this.clearTodo} />
      </div>
    );
  }
}

export default App;
