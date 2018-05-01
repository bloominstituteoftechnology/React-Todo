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
          {
            task: this.state.inputTextValue,
            id: Date.now(),
            completed: false,
            ID: Date.now(),
          },
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

  // handle task completion (remove task)
  handleTaskCompletion = e => {
    const taskID = e.target.id;
    const stateArr = [...this.state.todoListTasks];
    
    for (let i = 0; i < stateArr.length; i++) {
      if ('' + stateArr[i].ID === taskID) {
        stateArr.pop();
      }
    }

    this.setState({
      todoListTasks: [ ...stateArr ]
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
          handleTaskCompletion={ this.handleTaskCompletion }
        />
      </div>
    );
  }
}

export default App;
