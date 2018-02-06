import React, { Component } from 'react';

class Todo extends Component {

  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  click = () => {
    this.setState({ clicked: !this.state.clicked }); // changes it to whatever it wasn't.
  }; // (false to true, vice versa.)

  // next is figuring out how to attach click function to component...
  render() {
    // will be rendering something.
    const style = this.state.clicked
    ? { textDecoration: 'line-through'} // crosses out when clicked
    : { textDecoration: 'none' };
    return (
      <div style={style} onClick={this.click}>
        {this.props.todo}
      </div>
    );
  }
}

export default Todo;
