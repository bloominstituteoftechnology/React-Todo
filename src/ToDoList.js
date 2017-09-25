mport React, { Component } from "react";
class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      taskNames: [],
      newTask: ""
    };
  }
  addTask = event => {
    event.preventDefault();
    const taskNames = this.state.taskNames;
    if (!taskNames.includes(this.state.newTask)) {
      taskNames.push(this.state.newTask);
    }
    this.setState({
      newTask: "",
      taskNames: taskNames
    });
  };

  removeLastTask = event => {
    event.preventDefault();
    const taskNames = this.state.taskNames;
    taskNames.pop();
    this.setState({
      newTask: "",
      taskNames: taskNames
    });
  };

  removeThirdTask = event => {
    event.preventDefault();
    const taskNames = this.state.taskNames;
    taskNames.splice(2,1);
    this.setState({
      newTask: "",
      taskNames: taskNames
    })
  }

  removeArbitraryTask = (num) => {
    const taskNames = this.state.taskNames;
    taskNames.splice(num, 1);
    this.setState({
      newTask: "",
      taskNames: taskNames
    })
  }

  handleNewTaskNameInput = event => {
    this.setState({ newTask: event.target.value });
  };
  render() {
    return (
      <div>
        <h2> You have {this.state.taskNames.length} task(s) left to complete!</h2>
        <table>
          <tr>
            <th>Priority</th>
            <th>Task</th>
            <th>Remove task?</th>
          </tr>
            {this.state.taskNames.map(name => <tr>
            <td>{this.state.taskNames.indexOf(name)+1}</td>
            <td>{name}</td>
            <td><button id="completed-button" onClick={() => this.removeArbitraryTask(this.state.taskNames.indexOf(name))}></button></td>
            </tr>)}
        </table>
        <form onSubmit={this.addTask}>
          <input
            type="text"
            onChange={this.handleNewTaskNameInput}
            placeholder="Add a new task!"
            value={this.state.newTask}
          />
        </form>
      </div>
    );
  }
}
// Lastly, we need to export our component so that it can be imported in other parts of our React app
export default ToDoList;
