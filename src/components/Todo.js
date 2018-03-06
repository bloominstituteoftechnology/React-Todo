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

  handleXClick = () => {
    this.props.getIndex(this.props.index);
  }

  render() {

    // if (this.state.clicked) {
    //   const styles = { textDecoration: 'line-through' };
    // } else {
    //   const styles = { textDecoration: 'none' };
    // };

    const styles = this.props.todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' };


    return (
      <div>
        <div style={styles} onClick={this.handleXClick && this.props.toggle}>
          <button onClick={this.props.deleteTodo}>X</button>
          {this.props.todo.text}
        </div>
      </div>
    )
  }
}

export default Todo;