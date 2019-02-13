import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      task: '',
    };
  }

  formHandler = e => {
    this.setState({
      task: e.target.value
    });
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTodo],
      task: '',
    });
  }

  listClick = e => {
    e.target.classList.toggle('completed');
  }

  clearTodo = e => {
    
  }

  render() {
    return (
      <div className="list-container">
        <h2>DOING IT</h2>
        <div className="todo-list" onClick={this.listClick}>
          <TodoList
            todos={this.state.todos}
          />
        </div>
        <TodoForm
          onSubmit={this.addTodo}
          onChange={this.formHandler}
          value={this.state.task}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}
export default App;