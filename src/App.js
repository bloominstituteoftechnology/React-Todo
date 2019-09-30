import React from 'react';
import ReactDom from "react-dom";

const todoData = [
    {
        task: "Go to Gym",
        id: Date.now(),
        completed: false
    },
    {
        task: "Do Laundry",
        id: Date.now(),
        completed: false
    },
    {
        task: "Prepare Dinner",
        id: Date.now(),
        completed: false
    },
    {
        task: "Code",
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
