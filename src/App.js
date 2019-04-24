import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoListItems = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = {
          listItems: todoListItems,
          taskInput: ""
      };
  }

  handleChanges = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
  };

  addListItem = event => {
    event.preventDefault();
    this.setState({
      listItems: [...this.state.listItems, this.state.taskInput],
      item: {}
    });
  };

  render() {
    return (
      <div className="app">
        <TodoList listItems={this.state.listItems}/>
        <TodoForm onChange={this.handleChanges} onSubmit={this.addListItem} taskInput={this.state.taskInput}/>
      </div>
    );
  }
}

export default App;
