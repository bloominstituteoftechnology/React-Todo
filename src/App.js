import React, { Component } from 'react';

import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputTextValue: '',
      todoListTasks: [],
    };
  }

  // submit new task
  handleAddTask = () => {
    if (!this.state.inputTextValue) {
      alert('No Task!');
    }
    else {
      this.setState({
        inputTextValue: '',
        todoListTasks: [
          this.state.inputTextValue,
          ...this.state.todoListTasks
        ]
      });
    }
  };

  // handle text input value
  handleInputChange = e => {
    this.setState({
      inputTextValue: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>

        <TodoForm
          inputTextValue={this.state.inputTextValue}
          handleAddTask={this.handleAddTask}
          handleInputChange={this.handleInputChange}
        />

        <TodoList
          todoTask={ this.state.todoListTasks }
        />
      </div>
    );
  }
}

export default App;
