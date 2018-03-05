import React, { Component } from 'react';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    }

  }
  toggleState = () => {
    this.setState({
      clicked: !this.state.clicked
      
    })
  }

  render() {

    // if (this.state.clicked) {
    //   const styles = { textDecoration: 'line-through' };
    // } else {
    //   const styles = { textDecoration: 'none' };
    // };

    const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };


    return (
      <div style={styles} onClick={this.toggleState}>
        {this.props.todo}
      </div>
    )
  }
}

export default Todo;