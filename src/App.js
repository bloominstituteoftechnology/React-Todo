import React, { Component } from 'react';
import ToDoListOfThings from "./ToDoListOfThings";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  border: "2px solid black",
  padding:" 40px" ,
  background: 'yellowgreen'
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      newTask: '',
      toDoList: ['Bilkal ', ' Enter your name', ' Enter your LastName', " State your age", 'Your workStation', ' Things to Repair'],
    }
  }
  handelTask = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handelSubmitTask = (event) => {
    const { toDoList } = this.state;
    toDoList.push(this.state.newTask);
    this.setState({ toDoList, newTask: '' });
  };
  render() {
    return (
      <div style={styles}>
        <h2>Welcom To Todo App!!!!!!{"\u2728"} </h2>
        <ToDoListOfThings {...this.state} />
        <input type='text' placeholder=' add a task'
          name="newTask"
          value={this.state.newTask}
          onChange={this.handelTask} />
        <button onClick={this.handelSubmitTask}> Add Task</button>
      </div>
    );
  }
};
export default App;
