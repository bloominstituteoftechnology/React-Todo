import React from 'react';
import Todo from './components/Todo'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

const todos = [
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
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  // Class methods to update state
  toggleTodo = (todoId) => {
    console.log("Toggling item", todoId);
    this.setState({
      // Find the item in the todos array, and toggle its purchased flag
      todos: this.state.todos.map((todo) => {
        if (todoId === todos.id) {
          return {
            // Return the item with purchased flag toggled
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  addTodo = (todoTask) => {
    const newTodo = {
      task: todoTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => !todo.completed)
    });
  };

  render() {
    return (

      <div classtask="App">
      <div classtask="header">
        <h1>Todo List</h1>
        
      </div>
      <TodoList
        toggleTodo={this.toggleTodo}
        todos={this.state.todos}
        clearCompleted={this.clearCompleted}
      />
      <TodoForm addTodo={this.addTodo} />
    </div>
    );
  }
}

export default App;
