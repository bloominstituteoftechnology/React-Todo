import React from 'react';

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
  }
  {
    task: 'Clone your copy',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Make changes and push them up',
    id: Date.now(),
    completed: false
  }
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
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
