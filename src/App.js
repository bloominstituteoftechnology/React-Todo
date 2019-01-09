import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
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
      todoData: todoData, 
      inputText: ""
    }
  }

  handleInput = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  addTodoItem = (e) => {
    e.preventDefault();
    console.log('addItem');
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoData={todoData} />
        <TodoForm 
          handleInput={this.handleInput}
          addTodoItem={this.addTodoItem} 
        />
      </div>
    );
  }
}

export default App;
