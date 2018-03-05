import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      list: ['clean bathroom', 'mow lawn', 'bath dog'],
      newTask: '',
    }
  }

  addTask = (event) => {
    event.preventDefault();
    const taskList = this.state.list;
    taskList.push(this.state.newTask);
    this.setState({
      newList: '',
      list: taskList,
    });
  };

  handleTaskInput = (event) => {
    this.setState({ newList: event.target.value });
  };

  render(){
    return (
      <div> 
        {this.state.list.map((task, i) => <ChildComponent key={i} thing={task} />)}
        <form onSubmit={this.addTask}>
          <input type="text" onChange={this.handleTaskInput} placeholder="Add a new Task" value={this.state.newTask} />
        </form>
      </div>)
  }
}

export default ToDoList;