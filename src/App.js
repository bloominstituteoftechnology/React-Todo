import React from 'react';
import TodoList from './components/TodoList';

const image = require('./components/checks.png');

const tasks = [
  {
    task: 'Review Lesson of the Day',
    id: 123,
    completed: false
  },
  {
    task: 'Complete the Follow Along(s)',
    id: 1234,
    completed: false
  },
  {
    task: 'Attend Class Lecture',
    id: 12345,
    completed: false
  },
  {
    task: 'Begin Lesson Project',
    id: 123456,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App! <img src={image} alt='' /></h2>
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
};

export default App;
