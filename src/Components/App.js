/*eslint no-unused-vars: "off"*/
import React from "react";
import ReactDom from "react-dom";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        "Something1",
        "Something2",
        "Something3",
        "Something4",
        "Something5"
      ],
      newTask: "",
      strike_Through: false
    };

    this.handleNewTaskNameInput = this.handleNewTaskNameInput.bind(this);
    this.addnewTask = this.addnewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  addnewTask(event) {
    event.preventDefault();
    const list = this.state.list;
    list.push(this.state.newTask);
    this.setState({
      newTask: "",
      list: list
    });
  }

  deleteTask(task, i) {
    let list = this.state.list.slice();
    list.splice(i, 1);
    this.setState({
      list: list
    });
  }

  clearList() {
    this.setState({
      list: [],
      newTask: ""
    });
  }

  handleNewTaskNameInput(event) {
    this.setState({ newTask: event.target.value });
  }

  strikeThrough(task, i) {
    // this.setState({ strike_Through: !this.state.strike_Through });
  }
  render() {
    // let taskCompleted = this.state.strike_Through ? "line-through" : "none";
    return (
      <div>
        <ul>
          {this.state.list.map((task, i) => {
            return (
              <li
                // style={{ textDecoration: taskCompleted }}
                className="task-name"
                key={i}
                onClick={() => {
                  this.strikeThrough(task, i);
                }}
              >
                {task}
                <button
                  key={i}
                  className="delete-button"
                  onClick={() => {
                    this.deleteTask(task, i);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <form>
          <input
            type="text"
            onChange={this.handleNewTaskNameInput}
            placeholder="Add a new Task!"
            value={this.state.newTask}
          />
        </form>
        <button className="add-button" onClick={this.addnewTask}>
          Add
        </button>
        <button className="clear-list" onClick={this.clearList}>
          Clear All
        </button>
      </div>
    );
  }
}

export default App;
