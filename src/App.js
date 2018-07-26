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
      query: '',
    };
  }

  render() {
    let filteredTodos = this.state.todos.filter(
      todo => {
        if (todo.task === '') return;
        if (todo.task.length > 30) return;
        return todo.task.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1;
      }
    );
    return (
      <div className="container">
        <TodoList 
          todoArr={filteredTodos} 
          onItemClick={this.handleItemClick}
        />
        <TodoForm 
          onInputChange={this.handleInputChange} 
          onSubmit={this.addTodo} 
          onClear={this.clearTodo} 
          onClearAll={this.clearAll}
          onSearch={this.handleSearchChange}
        />
      </div>
    );
  }

  // ============== Event Handler Methods ==============

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

  handleSearchChange = e => {
    this.setState({query: e.target.value});
  };

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.concat([{ // add current todo (from input) to todos
        task: this.state.current,
        id: Date.now(),
        completed: false,
      }]),
    });
  };

  clearTodo = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(item => !item.completed), // array of incomplete todos
    });
  };

  clearAll = e => {
    e.preventDefault();
    this.setState({
      todos: [],
    });
  };

  // ============== Life Cycle Methods ==============

  componentWillMount() { // set todos IF they're stored locally
    localStorage.getItem('todos') && this.setState({
      todos: JSON.parse(localStorage.getItem('todos'))
    });
  }

  componentWillUpdate(nextProps, nextState) { // store todos locally
    localStorage.setItem('todos', JSON.stringify(nextState.todos));
  }
}

export default App;
