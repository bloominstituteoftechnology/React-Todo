import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      inputText: '',
    };
  }

  handleInput = (event) => {
    this.setState({ inputText: event.target.value });
  };

  // createTodo = (event) => {
  //   event.preventDefault();
  //   if (this.state.input)
  // }

  addTodo = (event) => {
    event.preventDefault();
    if (this.state.inputText) {
      console.log(this.state.inputText);
      this.setState({
        todos: [
          ...this.state.todos,
          {
            task: this.state.inputText,
            id: Date.now(),
            completed: false,
          },
        ],
        inputText: '',
      });
    }
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
