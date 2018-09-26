import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      toDoList: [{
        // task: "first task",
        // id: Date.now(),
        // completed: false
      }],
      task: ""
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      <TodoList info={this.state.toDoList} />
      <TodoForm />
      </div>
    );
  }
}

export default App;
