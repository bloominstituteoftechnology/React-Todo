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
    let newTodos = [...this.state.todos, 
      {
        task: this.state.todoText != '' ? this.state.todoText : 'write some actual todos',
        id: getDate,
        completed: false,
        matchesSearch: true,
      }
    ];

    localStorage.setItem('todo', JSON.stringify(newTodos));

    this.setState({
      todos: newTodos,
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

    let clearedTodos =  this.state.todos.filter(
      todo =>  !todo.completed
    );

    localStorage.setItem('todo', JSON.stringify(clearedTodos));
    this.setState({
      todos: clearedTodos,
    });
  }

  stopRefresh = event => {
    event.preventDefault();
  }

  componentDidMount(){
    const storedTodo = JSON.parse(localStorage.getItem('todo'));
    if (storedTodo){
      this.setState({todos: storedTodo})
    }
  }

  render() {
    return (
      <div className='todo-container'>
        <h2>Welcome to your Todo App!</h2>
        <SearchForm 
          searchText={this.state.searchText} 
          handleChange={this.handleChange}
          stopRefresh={this.stopRefresh} 
        />
        <TodoList 
          todos={this.state.todos}
          searchText={this.state.searchText}
          isComplete={this.isComplete}
          matchesSearch={this.matchesSearch}
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
