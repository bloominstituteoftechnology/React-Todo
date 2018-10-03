import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    let firstItem = {
      task: "Write to-do list",
      id: Date.now(),
      completed: false
    };

    this.state.list = [firstItem];
    this.state.newItem = "";
  }

  inputChangeHandler = event => {
    this.setState({ newItem: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    if (this.state.newItem !== "") {
      this.setState({ 
        list: [
          ...this.state.list,
          {
            task: this.state.newItem,
            id: Date.now(),
            completed: false
          }
        ],
        newItem: ""
      });
    }
  };

  completeToggle = event => {
    const index = event.target.attributes.index.value;
    let temp = this.state.list.slice();
    temp[index].completed = (temp[index].completed) ? false : true;
    this.setState({ list: temp });
  };

  cleanup = event => {
    event.preventDefault();
    this.setState({ list: this.state.list.filter(item => !item.completed) });
  };
  
  render() {
    return (
      <div className="app">
        <h1>To-Do List: MVP</h1>
        <TodoList todoList={this.state.list} toggle={this.completeToggle} />
        <TodoForm 
          text={this.state.newItem} 
          inputChangeHandler={this.inputChangeHandler} 
          addItem={this.addItem} 
          cleanup={this.cleanup}
        />
      </div>
    );
  }
}

export default App;