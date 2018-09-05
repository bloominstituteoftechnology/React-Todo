import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: [],
      task: ''
    };
  }

  //property
  addTodo = event => {
    event.preventDefault();
    if (this.state.task) {
      this.setState({
        todo: [...this.state.todo, this.state.task],
        task: ''
      });
    }
  };

  handleInput = event => {
    this.setState({
      task: event.target.value
    });
  };

  render() {
    return (
      <div>
        <TodoList todo={this.state.todo} />
        <TodoForm
          addTodo={this.addTodo}
          task={this.state.task}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
