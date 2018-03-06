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

  render() {
    const styles = this.state.clicked ? { textDecoration: 'line-through'} : { textDecoration: 'none' }
    return (
       <div> <span style={styles} onClick={this.handleClick}>{this.props.thing}</span><button onClick={this.props.removeThing}>x</button></div>
    );
  }
}

export default Todo;