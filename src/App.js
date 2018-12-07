import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
      
      
    };
    
  }

  addTodo = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({task: this.state.todo, completed: this.state.completed, id: Date.now()});
    
    this.setState({todos, todo: ''});
  };

  changeTodo = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  toggleTodoComplete = id => {
    let newTodos = this.state.todos.slice();

    newTodos = newTodos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({newTodos});
  }

  clearCompletedTodos = event => {
  event.preventDefault();
  let todos = this.state.todos.slice();
  todos = todos.filter(todo => !todo.completed);
  console.log(todos);
  this.setState({todos});
}

  render() {
    return (
      <div>
      <h1> Your Todo App</h1>
        <TodoList 
        handleToggleComplete = {this.toggleTodoComplete}
        todos = {this.state.todos} 
        />
        <TodoForm
          value = {this.state.todo}
          handleTodoChange = {this.changeTodo}
          handleAddTodo = {this.addTodo}
          handleClearTodos = {this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;
