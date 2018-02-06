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
  }
}

export default Todo;
