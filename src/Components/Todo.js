import React, { Component } from 'react';
class Todo extends Component {
  
  toggle = () => {
    this.props.lineThrough(this.props.index);
  }

  handleXClick = () => {
    console.log("handleXClick")
    this.props.removeTodo(this.props.index);
  }

  render() {

    const styles = this.props.todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
    
    return (
      <div id='Todo'>
        <div onClick={this.handleXClick}><button>X</button></div>
        <div style={styles} onClick={this.toggle}>
          
          {this.props.todo.text}
          
        </div>
      </div>
    )
  }
}

export default Todo;