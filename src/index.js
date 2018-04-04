import React, { Component } from 'react';
import { render } from 'react-dom';
import TaskList from './App';
// import Strike from './Strike';

const styles = {
  fontFamily: "sans-serif",
  // textAlign: "center"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
      todoList: ["Study", "Clean", "Workout", "Walk Dog"]
    };
  }

  handleAddTask = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitTask = () => {
    const { todoList } = this.state;
    todoList.push(this.state.newTask);
    this.setState({ todoList, newTask: "" });
  };

  strike = e => {
  	e.target.style.textDecoration = e.target.style.textDecoration === '' ? 'line-through' : '';
	}

  render() {
    return (
      <div style={styles}>
        <h2>Todo List</h2>
        <TaskList {...this.state} toggleClick={this.strike}/>
        <input
          type="text"
          name="newTask"
          value={this.state.newTask}
          placeholder="Type new task here..."
          onChange={this.handleAddTask}
        />
        <button onClick={this.handleSubmitTask}>Submit</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
