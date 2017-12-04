import React, { Component } from 'react';
import './Todo.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      text : props.text,
      completed: props.completed
    };
  }

  toggle = () => {
    this.setState({completed: !this.state.completed});
    console.log(`completed: ${this.state.completed}`);
  }

  render() {
    const styles = this.state.completed ? 
    {textDecoration: 'line-through'} : 
    {textDecoration: 'none'};
    return (
      <div>
        <div>
          <span class="todo__text" onClick={this.toggle} style={styles}>{this.props.todo.text}</span> 
          <button class="todo__button" onClick={this.props.delete}>X</button>
        </div>
      </div>
    );
  }
}