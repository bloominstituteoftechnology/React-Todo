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
  }

  render() {
    const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
    const buttonStyle ={marginLeft: 5};
    return (
      <div style={styles} onClick={this.handleClick}>
        {this.props.thing}
        <button style={buttonStyle}>x</button>
      </div>

    );
  }
}

export default Todo;
