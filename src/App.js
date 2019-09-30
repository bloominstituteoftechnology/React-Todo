import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const Tasks = [
  {
    name: 'Tony',
    id: 120,
    completed: false,
  }];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: Tasks,
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to 
  // work with your state

  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    };
    console.log(this);
    this.setState({
      task: [...this.state.task, newTask]
    });
  };
  render() {
    return (
      <div>
        <div>
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList todo={this.state.task} />
      </div>
    );
  }
}

export default App;
