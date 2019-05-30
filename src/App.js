import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import { data } from './data';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any
  // change handlers you need to work with your state
  constructor() {
    super();
    this.state= {
      todoData: data,
      task: '',
      id: '',
      completed: false
    }
  }
  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.task);
  }

  addTask = event => {
    event.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoData: [...this.state.todoData, newTask],
      task: '',
      id: '',
      completed: false
    })
  }



  render() {
    return (
      <div>
        <TodoList todoData={this.state.todoData}/>
        <TodoForm handleChanges={this.handleChanges} addTask={this.addTask} task={this.state.task} />
      </div>
    );
  }
}



export default App;
