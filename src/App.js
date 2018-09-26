import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoData: [],
      textField: ''
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h1>Todo List: MVP</h1>
        <TodoList data={this.state} />
        <TodoForm addNew={this.addTodo} handleInput={this.handleInput} />
      </div>
    );
  }

  addTodo = () => {
    console.log('clicked');

    this.setState({
      todoData: [
        ...this.state.todoData,
        { task: this.state.textField, id: Date.now(), completed: false }
      ],
      textField: ''
    });
  };

  handleInput = event => {
    this.setState({ textField: event.target.value });
  };
}

export default App;
