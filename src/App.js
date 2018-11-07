import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [{
            task: 'Walk the Pup',
            id: '',
            completed: false,
          },
          {
            task: 'Walk the Pup',
            id: '',
            completed: false,
          },],
      inputText: '',
      };
  }

  addTask = (event) => {
    event.preventDefault();
    console.log('button working');
    this.setState({
      tasks: [
        ...this.state.tasks, 
        {
          task: this.state.inputText, 
          id: Date.now(), 
          completed: false
        }
      ]
    });
    this.setState({
      inputText: ''
    })
  }

  clearTasks = (event) => {
    this.setState({
      tasks: []
    })
  }

  changeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      inputText: event.target.value
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <TodoList todoArray={this.state.tasks} />
        <TodoForm addTask={this.addTask} clearTasks={this.clearTasks} inputText={this.state.inputText} changeHandler={this.changeHandler} />
      </div>
    );
  }
}

export default App;
