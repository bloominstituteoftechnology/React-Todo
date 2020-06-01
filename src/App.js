import React from 'react';

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

const test = [
  {name: "yes",
id: 12312332,
completed: false,},
{name: "no",
id: 124,
completed: true,},
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: test,
    }
  }

  addTodo = todoName => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false,
    };
    console.log(newTodo)
    this.setState({todos: [...this.state.todos, newTodo]});
    console.log(this.state.todos);
  }

  toggleTodo = todoID => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoID) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    });
  }

  clearCompleted = () => {
    // this.state.todos.filter(todo => todo.completed)
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList toggleTodo={this.toggleTodo} todos={this.state.todos} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
