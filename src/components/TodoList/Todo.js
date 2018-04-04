import React, { Component } from 'react';

class Todo extends Component {

  render() {
    const styles = this.props.completed ? { textDecoration: 'line-through'} : { textDecoration: 'none' }
    return (
       <div className="Todo__container">
        <span className="Todo__text" style={styles} onClick={this.props.listItemDone}>{this.props.thing}</span>
        <button className="Todo__button" onClick={this.props.removeFromList}>-</button>
       </div>
    );
  }
}

export default Todo;