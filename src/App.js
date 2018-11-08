import React, { Component } from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends Component {

  // Constructor
  constructor(props) {
    super();
    this.state = {
      currentList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      inputValue: ''
    }
  }

  // Methods
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addItem = e => {
    e.preventDefault();
    this.setState({
      currentList: [...this.state.currentList, { task: this.state.inputValue, id: Date.now(), completed: false }],
      inputValue: ''
    });
  }

  markComplete = e => {
    e.target.classList.toggle('complete');
    let currentItem = this.state.currentList.find(i => i.task === e.target.innerText);
    currentItem.completed === false ? (currentItem.completed : true) : (currentItem.completed: false);
    console.log(currentItem)
  }

  // Render
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          list={this.state.currentList}
          markComplete={this.markComplete}
        />
        <TodoForm
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default App;
