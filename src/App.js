import React from 'react';




const tasks = [
  {
    name: 'Take out the garbage',
    id: 4142,
    completed: false
  },
  {
    name: 'Complete Lambda School Project',
    id: 4143,
    completed: false
  },
  {
    name: 'Exercise for 30 minutes',
    id: 4144,
    completed: false
  },
  {
    name: 'Wash the car',
    id: 4145,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
    tasks: tasks
  }
}



  addTask = (taskName, e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    }
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
