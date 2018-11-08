import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchForm from './components/TodoComponents/SearchForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todoText: '',
      searchText: '',
    }
  }


  addToTodos = event => {
    event.preventDefault();

    let getDate = Date.now();

    this.setState({
      todos: [
        ...this.state.todos, 
        {
          task: this.state.todoText,
          id: getDate,
          completed: false,
        }
      ],
      todoText: '',
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  isComplete = id => {
    this.setState({
      todos: this.state.todos.map(currentTodo => {
        if (currentTodo.id === id) {
          return {
            ...currentTodo, 
            completed: currentTodo.completed === 'false' ? 'true' : 'false'
          };
        } else {
          return currentTodo;
        };
      })
    });
  }

  searchTodos = event => {
    event.preventDefault();

    let filteredTodos = this.state.todos;

    filteredTodos = filteredTodos.filter(todo => todo.task.includes(this.state.searchText));

    this.setState({
      todos: filteredTodos,
      searchText: '',
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <SearchForm 
          searchTodos={this.searchTodos} 
          searchText={this.searchText} 
          handleChange={this.handleChange} 
        />
        <TodoList 
          todos={this.state.todos}
          isComplete={this.isComplete}
        />
        <TodoForm 
          addToTodos={this.addToTodos} 
          todoText={this.state.todoText} 
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
