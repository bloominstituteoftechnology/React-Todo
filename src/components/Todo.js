import React, { Component } from 'react';
import './Todo.css'
class Todo extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }

  }
  toggleState = () => {
    console.log(this.props);
    console.log(this.props.todo);
    console.log(this.props.todo.completed);
    
    this.props.todo.completed = !this.props.todo.completed;
    
    console.log(this.props.todo.completed);
    
    this.setState({counter: ++this.counter});
  }

  handleXClick = () => {
    console.log("handleXClick")
    this.props.getIndex(this.props.index);
  }

  toggleCombo = () => {
    this.handleXClick();
    // this.props.toggle;
  }
  

  render() {

    // if (this.state.clicked) {
    //   const styles = { textDecoration: 'line-through' };
    // } else {
    //   const styles = { textDecoration: 'none' };
    // };

    const styles = this.props.todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
    

    return (
      <div id='todo-item'>
        <div onClick={this.handleXClick}><button>X</button></div>
        <div style={styles} onClick={this.toggleState}>
          
          {this.props.todo.text}
          
        </div>
      </div>
    )
  }
}

export default Todo;