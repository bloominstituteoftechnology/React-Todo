import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { getHeapStatistics } from 'v8';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  CreateTodo = (todo) => {
    const newTodo = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
    };

    this.setState(prevState => {
      const todos = prevState.todos.slice();
      todos.push(newTodo);
      return { todos: todos };

    })
   
  }
  handleChange = (event) => {
        this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
          addTodo={this.CreateTodo}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
