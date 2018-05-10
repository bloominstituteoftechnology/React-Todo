import React, { Component } from 'react';
import Components from './components/Components';

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: "To-Do List",
      task: '',
      list: []
    };
  }

  handleListChange = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleButtonClick = e => {
    const list = this.state.list;
    const task = {
      name: this.state.task,
      id: this.state.list.length,
      completed: false,
      strikethrough: function(i) {
        const item = document.getElementById(list[i].id)
        if (list[i].completed === true) {
          item.style.textDecoration = "line-through";
        } else {
          item.style.textDecoration = "none";
        }
      }
    };
    list.push(task);
    this.setState({ list: list, task: '' });
  } 

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <Components list ={this.state.list} />
        <input name="task"
          value={this.state.task}
          placeholder="Please type your task here"
          onChange={this.handleListChange}
          />
          <button onClick={this.handleButtonClick}>Add task</button>
      </div> 
    )
  };
};
export default App;