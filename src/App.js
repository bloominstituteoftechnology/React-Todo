import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: '',
      task: '',
      id: '',
      completed: false,
    }
  }

  handleChanges = event => {
    this.setState({ task: event.target.value });
  };

  addTask = event => {
    event.preventDefault();
    const newTaskItem = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed,
    };
    this.setState({
      tasks: [...this.state.tasks, newTaskItem] // assigned to new array
    });
  };

  render() {
    return (
      <div>
        <TodoList 
          handleChanges = {this.handleChanges}
          addTask = {this.addTask}
          task = {this.state.task}
          id = {this.state.id}
        />
      </div>
    );
  }
}

export default App;
