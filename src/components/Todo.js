import React, { Component } from 'react';

class Todo extends Component {

  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  click = () => {
    this.setState({ clicked: !this.state.clicked });
  };
}

export default Todo;
