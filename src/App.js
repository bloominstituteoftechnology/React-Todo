import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoDataStarter = [
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
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: todoDataStarter, 
      inputText: ""
    }
  }

  handleInput = (e) => {
    this.setState({
      inputText: e.target.value
    });
  }

  addTodoItem = (e) => {
    e.preventDefault();
    console.log('addItem: ', this.state.inputText);
    this.setState({
      todoData: [
        ...this.state.todoData,
        {
          task: this.state.inputText,
          id: Date.now(),
          completed: false
        }
      ],
      inputText: ""
    });
  }

  render() {
    console.log(this.state.inputText);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoData={this.state.todoData} />
        <TodoForm 
          handleInput={this.handleInput}
          addTodoItem={this.addTodoItem} 
          inputText={this.state.inputText}
        />
      </div>
    );
  }
}

export default App;
