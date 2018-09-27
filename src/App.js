import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [{
          task: 'Get some sleep',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Organize Garage',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Finish Project',
          id: Date.now(),
          completed: false
        }
      ]
    }
  }
  keypressHandler = event => {
    if (event.keycode === 13) {
      this.setState({
        task: event.target.value,
        id: Date.now(),
        completed: false
      });
    }
    event.target.value = "";
  }

  // clickHandler = event => {
  //   //font style goes here
  // }

  render() {
    return (
      <div>
        <h2>React To Do List</h2>
        <TodoList tasks={this.state.tasks}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
