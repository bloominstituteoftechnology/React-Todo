import React from 'react';


//Adding Data

const todoData = [
  
  {
    task: 'Meal Prep',
    id: 2001,
    completed: false,
  },

  {
    task: 'Do Laundry',
    id: 2002,
    completed: false,
  },

  {
    task: 'Learn React Class Components',
    id: 2003,
    completed: false,
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
