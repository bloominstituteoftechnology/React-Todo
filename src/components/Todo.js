import React, { Component } from 'react';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  removeThing = function() {
    console.log(1);
    this.props.removeThing();
}

  render() {
    const styles = this.state.clicked ? { textDecoration: 'line-through'} : { textDecoration: 'none' }
    return (
        <span style={styles} onClick={this.handleClick}>{this.props.thing}</span>
    );
  }
}

export default Todo;