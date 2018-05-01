import React, { Component } from "react";
import ComponentList from "./components/component";

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: "To Do List",
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
      strikeThrough: function(i) {
        const item = document.getElementById(list[i].id)
        if (list[i].completed === true) {
          //console.log(item);
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
      <ComponentList list={this.state.list}/>
      <input name="task" 
        value={this.state.task} 
        placeholder="enter new task"
        onChange={this.handleListChange}
        />
      <button onClick={this.handleButtonClick}>
        Add new task!
      </button>
    </div>
    )
  }


}

export default App;
