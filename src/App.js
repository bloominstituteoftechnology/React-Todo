import React from 'react';

// const ToDoTasks = [
//   {
//     task: 'Watch Arrrested Development',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Fry Cornball Snacks',
//     id: 1528817084358,
//     completed: false
//   },
//   {
//     task: 'Bandage Resulting Burns',
//     id: 1528817084358,
//     completed: false
//   }
// ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super ()
    this.state = {
      todos: [
        {
          task: 'Watch Arrrested Development',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Fry Cornball Snacks',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Bandage Resulting Burns',
          id: 1528817084358,
          completed: false
        }
      ]
    }
    todo: ""
  }
}

export default App;
