import React, { Component } from 'react';
import './Completed.css';

class Completed extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleXClick = () => {
    this.props.action(this.props.index);
  }

  render() {
    const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
    return (
      <div>
        <div id="one" onClick={this.handleXClick}>x</div>
        <div id="two" style={styles} onClick={this.handleClick}>{this.props.itemKey}</div>
        {/* <div style={styles} onClick={this.handleClick}>{this.props.itemKey}</div> */}
      </div>
    );
  }
}

export default Completed;