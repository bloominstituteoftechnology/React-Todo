import React, { Component } from 'react'

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      completed: false
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  remove = () => {
    this.props.remove(this.props.index);
}

  render() {
    const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
    return (
      <div className="outer">
      <div id="button-container">
        <div id="input" style={styles} onClick={this.handleClick}>
          {this.props.todo}
        </div>
        <button id="remove" onClick={this.remove}> X </button>
      </div>
      </div>
    );
  }
}

export default Todo;