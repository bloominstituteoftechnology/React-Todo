import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchForm from './components/TodoComponents/SearchForm';
import './app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todoText: '',
      searchText: '',
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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

  isComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, 
            completed: todo.completed ? false : true,
          };
        } else {
          return todo;
        };
      })
    });
  }

  clearComplete = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(
        todo =>  !todo.completed
      )
    });
  }


  // searchTodos = event => {
  //   event.preventDefault();

  //   let filteredTodos = this.state.todos;

  //   filteredTodos = filteredTodos.filter(todo => todo.task.includes(this.state.searchText));

  //   this.setState({
  //     todos: filteredTodos,
  //     searchText: '',
  //   })
  // }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='todo-container'>
        <h2>Welcome to your Todo App!</h2>
        {/* <SearchForm 
          searchTodos={this.searchTodos} 
          searchText={this.searchText} 
          handleChange={this.handleChange} 
        /> */}
        <TodoList 
          todos={this.state.todos}
          isComplete={this.isComplete}
        />

        <TodoForm 
          addToTodos={this.addToTodos} 
          todoText={this.state.todoText} 
          handleChange={this.handleChange}
          clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

export default App;
