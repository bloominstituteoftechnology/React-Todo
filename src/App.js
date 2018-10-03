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
      search: '',
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

  render() {
    return (
      <TodoList 
        todos={this.state.todos}
        changeHandler={this.changeHandler}
        addTodo={this.addTodo}
        completeTask={this.completeTask}
        clearTodos={this.clearTodos}
      />
    )
  }
}

export default App;