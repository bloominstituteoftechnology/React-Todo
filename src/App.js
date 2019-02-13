import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor () {
    super();
    this.state= {
      task: [],
    }

    addTask = e => {
      e.preventDefault();
      this.setState({

      })
    }

  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoForm 
        task={this.task}
        handleChanges={this.handleChanges}
        addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;
