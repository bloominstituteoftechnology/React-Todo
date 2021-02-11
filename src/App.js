import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "This is a test"
    };
  }


  updateStateMessage = (e)=> {
    this.setState({message:e.target.value});
  }

  addTask = (itemName, e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: itemName,
      purchased: false
    }
    this.setState({
      ...this.state,
      message: [...this.state.message, newItem]
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo: APP</h2>
        <TodoList message={this.state.message} />
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
