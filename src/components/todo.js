import React, { Component } from 'react';
import './todo.css';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
    };
  }

  toggleSelected = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  render(){
    return (
      <li className={(this.state.selected === true) ? 'selected' : null} onClick={this.toggleSelected}>{this.props.todo}</li>
    );
  };

}

export default Todo;
