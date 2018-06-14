import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from "./components/TodoComponents/TodoList";


class App extends React.Component {
  constructor () {
    super ();
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
      todo: ""
    }
  }
  addTodo = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState ({todos, todo: ""});
  };

  changeTodo = event => this.setState({ [event.target.name]: event.target.value});
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="container">
        <h2>Todo List!</h2>
        <TodoList
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          changeTodo={this.changeTodo}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
