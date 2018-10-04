import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
      ],
      newTodo: '',
      searchText: '',
      backupList: [
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
      ],
    }
  }

  changeHandler = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value})
  }

  addTodo = (event) => {
    event.preventDefault();
    if (this.state.newTodo !== '') {
      this.setState({
        todos: [
          ...this.state.todos, { 
            task: this.state.newTodo,
            id: Date.now(),
            completed: false,
          }
        ],
        newTodo: '',
        backupList: [
          ...this.state.todos, { 
            task: this.state.newTodo,
            id: Date.now(),
            completed: false,
          }
        ]
      });
      document.getElementById('form').reset();
    }
  }

  completeTask = event => {
    let id = event.target.id; 
    let todos = this.state.todos;
    todos.map(todo =>{
      if (todo.id == id) {
        todo.completed = !todo.completed;
        return todo;
      }
      else {
        return todo;
      }
    });
    this.setState({todos});
  };

  clearTodos = (event) => {
    event.preventDefault();
    let todos = this.state.todos;
    todos = todos.filter(todo => todo.completed === false)
    this.setState({todos});
  }

  searchHandler = (event) => {
    event.preventDefault();
    if (event.target.value == '') {
      this.setState({
        searchText: '',
        todos: this.state.backupList,
      })
    }
    else {
      this.setState({[event.target.name]: event.target.value})
      let searched = this.state.todos.filter(todo => todo.task.includes(event.target.value));
      this.setState({todos: searched})
    }
  }

  render() {
    return (
      <TodoList 
        todos={this.state.todos}
        changeHandler={this.changeHandler}
        addTodo={this.addTodo}
        completeTask={this.completeTask}
        clearTodos={this.clearTodos}
        searchHandler={this.searchHandler}
      />
    )
  }
}

export default App;