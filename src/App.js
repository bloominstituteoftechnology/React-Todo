import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Do Laundry',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Walk Dog',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Grocery Shopping',
          id: 1529016806261,
          completed: false
        },
      ],
      todo: ""
    };
  }
// Handler/Functions
  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({task: this.state.todo, id: Date.now(), completed: false});
    this.setState({todos, todo: ''});
  }

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
  }
  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({todos});
  }

// Render the JSX
  render() {
    return (
      <div className="container">
        <h1>Todo List:</h1>
        <TodoList
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

// Github Pull Request:
// https://github.com/LambdaSchool/React-Todo/pull/288