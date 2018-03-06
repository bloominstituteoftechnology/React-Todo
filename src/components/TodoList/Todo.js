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
       <div> <span className="Todo__text" style={styles} onClick={this.handleClick}>{this.props.thing}</span><button className="Todo__button" onClick={this.props.removeThing}>x</button></div>
    );
  }
}

export default Todo;