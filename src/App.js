import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      inputText: '',
      };
  }

  addTask = (event) => {
    event.preventDefault();
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
      tasks: this.state.tasks.filter(x => Object.values(x).includes(false))
    })
  }

  changeHandler = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  completedToggle = (event) => {
    event.target.classList.toggle('completed');
    let newTasks = this.state.tasks;
    for (let i = 0; i < newTasks.length; i++) {
      if (event.target.classList.contains('completed')) {
        if (!Object.values(newTasks[i]).includes(event.target.key)) {
          newTasks[i] = {
            task: newTasks[i].task,
            id: newTasks[i].id,
            completed: true
          }
        }
      }
      else {
        if (!Object.values(newTasks[i]).includes(event.target.key)) {
          newTasks[i] = {
            task: newTasks[i].task,
            id: newTasks[i].id,
            completed: false
          }
        }
      }
      
    }
    this.setState({
      tasks: newTasks
    })
  }
  

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <TodoList completedToggle={this.completedToggle} todoArray={this.state.tasks} />
        <TodoForm addTask={this.addTask} clearTasks={this.clearTasks} inputText={this.state.inputText} changeHandler={this.changeHandler} />
      </div>
    );
  }
}

export default App;
