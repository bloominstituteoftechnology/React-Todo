import React, { Component } from "react";

class Todo extends Component {

  handleToggleComplete = e => {
    let style = e.target.style.textDecoration === 'line-through' ? '' : 'line-through';
    e.target.style.setProperty('text-decoration', style);
  }

  render() {
    return (
      <div style={{textDecoration: 'none'}} onClick={this.handleToggleComplete}>{this.props.todo}</div>
    );
  }
}

export default Todo;
