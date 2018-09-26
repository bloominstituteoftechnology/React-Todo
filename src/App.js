import React from 'react';
import Todo from 'Todo':

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  super();

  this.state = {
    toDoData:
    [
      {
        task: "Finish TODO list",
        id: 1,
        completed: false
      },
      {
        task: "Add more funcitonality",
        id: 2,
        completed: false
      },
      {
        task: "Add styling",
        id: 3,
        completed: false
      }
    ]
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
