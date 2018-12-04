import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          task: 'string',
          id: 101011,
          completed: false
        },
      ],
      newTask: {}
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
