import React, { Component } from 'react';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      
    }

    
  }
  // toggleState = () => {
  //   console.log(this.props);
  //   console.log(this.props.todo);
  //   console.log(this.props.todo.completed);
  //   this.props.todo.completed = !this.props.todo.completed;
  //   console.log(this.props.todo.completed);
  //   this.setState({counter: ++this.counter});
  // }

  render() {

    // if (this.state.clicked) {
    //   const styles = { textDecoration: 'line-through' };
    // } else {
    //   const styles = { textDecoration: 'none' };
    // };

    const styles = this.props.todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' };


    return (
      <div style={styles} onClick={this.props.toggle}>
        {this.props.todo.text}
      </div>
    )
  }
}

export default Todo;