import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      inputText: ""
    };
  }

  addTodo = event => {
    event.preventDefault();
    console.log(this.state.inputText);
    if (this.state.inputText) {
      this.setState({
        todo: [...this.state.todo,{
        task: this.state.inputText,
        id: Date.now(),
        completed: false}],
        inputText: ""
      });
    }
  };

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  handleEventKey = e => {
    if (e.key === 'Enter') {
      this.addTodo();
    }
  }

  render() {
    return (
      <div>
        <TodoList todo={this.state.todo} />
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
