import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ""
    };
  }

  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice()
    todos.push({task: this.state.todo, id: Date.now(), completed: false});
    this.setState({todos, todo: ''});
  };

  changeTodo = e => this.setState({[e.target.name]: e.target.value});

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({todos});
  };

  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({todos});
  };

  render() {
    return (
      <div className="todo-container">
        <h1 className="headerInfo"> Todo List: MVP</h1>
        <TodoList className = "completed"
          handleToggleComplete={this.toggleTodoComplete}
          tasks={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;