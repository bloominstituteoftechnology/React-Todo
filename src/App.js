import React from 'react';
import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

const toDos = [
  {
    task: 'Open Master Branch',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Fork a copy',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Clone your copy',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Make changes and push them up',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Complete first pull request',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Knock it out of the park',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor () {
    super ();
    this.state = {
      toDo: toDos,
      newItem: ""
    }
  }

  handleAddToDo = event => {
    event.preventDefault();
    const items = this.state.toDo.slice();
    let input = this.state.newItem;

    items.push(
      {
        task: input,
        id: Date.now(),
        completed: false
      }
    );

    this.setState({toDo: items, newItem: ""});
  }

  inputAddToDo = event => {
    this.setState({newItem: event.target.value})
  }

  handleClearToDo = event => {
    event.preventDefault();
    let items = this.state.toDo.slice();
    items = items.filter(item => item.completed === false);
    this.setState({toDo: items});
  }

  render() {
    return (
      <div>
        <TodoList array={this.state.toDo} taskChange={this.handleTaskChange}/>
        <TodoForm value={this.state.newItem} itemAdd={this.inputAddToDo} add={this.handleAddToDo} clear={this.handleClearToDo}/>
      </div>
    );
  }
}

export default App;
