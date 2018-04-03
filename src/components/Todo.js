import React, { Component } from 'react';
import './Todo.css'
class Todo extends Component {
  
  toggleState = () => {
    this.props.strikeout(this.props.index);
  }

  handleXClick = () => {
    console.log("handleXClick")
    this.props.removeTodo(this.props.index);
  }

  render() {

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