import React from 'react';
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
    }
  }

  handleAddToDo = event => {
    const items = this.state.toDo.slice();
    let input = document.getElementById("taskInput").value;

    items.push(
      {
        task: input,
        id: Date.now(),
        completed: false
      }
    );

    this.setState({toDo: items});
    document.getElementById("taskInput").value = null;
  }

  render() {
    return (
      <div>
        <TodoList array={this.state.toDo}/>
        <TodoForm add={this.handleAddToDo}/>
      </div>
    );
  }
}

export default App;
