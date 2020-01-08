import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
      ]
    }
  }
  // class methods
  addTodo = (newTodoText) => {
    const newTodo = {
      task: newTodoText,
      id: this.state.todos.length + 1,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  };
  clearCompleted = (event) => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(t => t.completed === false)
    })
  };
  completeTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.map(t => {
        if (t.id === todoId) {
          return {
            ...t,
            completed: !t.completed
          }
        } else {
          return t
        }
      })
    })
  };
  render() {
    return (
      <div>
        <header>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo}/>
        </header>
        <TodoList todos={this.state.todos} completeTodo={this.completeTodo} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
