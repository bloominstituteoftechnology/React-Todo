import React from 'react';

const myArr = [
  {
    task: 'make coffee',
    id: 1,
    completed: false,
  },
  {
    task: 'eat empanadas',
    id: 2,
    completed: false,
  },
  {
    task: 'call my father',
    id: 3,
    completed: false,
  },
  {
    task: 'empty compost',
    id: 4,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
