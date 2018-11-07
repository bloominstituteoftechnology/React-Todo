import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todoText: '',
    }
  }

  addToTodos = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, {todoInfo: this.state.todoText}],
      todoText: '',
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm addToTodos={this.addToTodos} todoText={this.state.todoText} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
