import React, { Component } from 'react';
import './Done.css';

class Done extends Component {
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
    const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
    return (
      <div id="two" style={styles} onClick={this.handleClick}> {this.props.thing.text}</div>
    );
  }
}

export default Done;
