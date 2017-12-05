import React, { Component } from 'react';

class Todo extends Component {
  constructor() {
    super();
      this.state = {
        clicked: false,
      };
  }

  handleClick = () => {
    if (this.state.clicked === true) {
      this.setState({ clicked: false});
    } else {
      this.setState({ clicked: true});
    }
  }

  render() {
    const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
    console.log(this.state.clicked);
    return (
      <div style={styles} onClick={this.handleClick}>{this.props.todo}</div>
    );
  }
}

export default Todo;
