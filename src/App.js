//<App /> will hold all the data needed for this project. It will also be the container for your Todo Components.
//All of your application data will be stored here on <App />.
//All of your handler functions should live here on <App />.
import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      data: [
        {
          task: '',
          id: Date.now(),
          completed: false,
        },
      ]
    };
  }

  handleClick(event) {
    this.setState({
      task: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todoList={this.state.data} submit={this.handleClick} />
      </div>
    );
  }
}

export default App;
