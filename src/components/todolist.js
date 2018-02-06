import React, { Component } from 'react';
import Todo from './todo';
import './todolist.css';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      activities: [],
      input: '',
    };
  }

  newActivity = (event) => {
    event.preventDefault();
    const temp = [...this.state.activities, this.state.input];
    this.setState({
      activities: temp, 
      input: '', 
    });    
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      input: event.target.value,
    });
  }

  removeActivity = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.newActivity}>
          <input type='text' placeholder='Add New Activities Here' onChange={this.handleInput} value={this.state.input} />
        </form>
        {this.state.activities.map((val, i) => <Todo key={i} todo={val} />)}
      </div>
    );
  }

}

export default TodoList;
