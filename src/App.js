import React from 'react';
import './App.css';
// import Todo from './components/TodoComponents/Todo.js';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import { getPortPromise } from '../node_modules/portfinder';

// const arr = [
//   {id: 1, task: 'learn React', completed: false},
// ]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: [],
      current: ''
    }
  }
  handleUpdateState = event => {
    let tasks = this.state.tasks.slice();
    tasks = tasks.push([{
        id: Date.now(),
        task: this.state.current,
        completed: false,
      }])
    this.setState({
      tasks: tasks,
      current: ''
    });
  };
  handleInputChange = event => {
    this.setState({current: event.target.value});
  }
  completed = () => {
    this.setState(prevState => {
      return {completed:!prevState.completed}
    });
  }
  removeTasks = () => {
    let remain = this.state.tasks.filter(element => element.completed===false)
    this.setState({tasks:remain})
  }
  render() {
    console.log(this.state);
    return (
      <div className='container'>
        <h1 className='title'> Todo List MVP</h1>
        <TodoList list={this.state.tasks} done={this.completed}/>
        <TodoForm handle={this.handleInputChange} 
                  update={this.handleUpdateState}
                  remove={this.removeTasks}
        />
      </div>
    );
  }
}

export default App;
