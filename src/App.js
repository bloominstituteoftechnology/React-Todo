import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoArr: [{
        task: 'build todo app',
        id: '4',
        completed: false,
      },
      {
        task: 'do some stuff',
        id: 8,
        completed: false,
      },
      {
        task: 'do some more stuff',
        id: 15,
        completed: false,
      }
    ]
    };
  }

  //handler functions



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
