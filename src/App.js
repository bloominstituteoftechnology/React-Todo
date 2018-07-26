import React from 'react';
import './App.css';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

// const arr = [
//   {id: 1, task: 'learn React', completed: false},
//   {id: 2, task: 'complete MVP', completed: false},
//   {id: 3, task: 'do laundry', completed: false}
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
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([{
        id: Date.now(),
        task:this.state.current,
        completed: false,
      }]),
      current: ''
    });
  };
  handleInputChange = event => {
    this.setState({current: event.target.value});
  }
  completed = event => {
    this.setState({completed:true})
  }
  render() {
    return (
      <div className='container'>
        <h1 className='title'> Todo List MVP</h1>
        <TodoList list={this.state.tasks}/>
        <TodoForm clear={this.completed} handle={this.handleInputChange} update={this.handleUpdateState} />
      </div>
    );
  }
}

export default App;
