import React from 'react';
import Todos from './components/TodoComponents/Todo';

class App extends React.Component {
  state = {
    todos: [
      {
      id: 1,
      title: 'Take out the trash',
      completed: false,
      }
    ]
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>App</h2>
        <Todos/>
      </div>
    );
  }
}

export default App;
