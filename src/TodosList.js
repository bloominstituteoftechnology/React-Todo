import React, { Component } from 'react';


class TodosList extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  
  render() {
    const todoItems = this.props.todo;
    const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };

    return (
      <div>
      <div style={styles} onClick={this.handleClick}>{todoItems}</div>
        <button onClick={() => this.props.deleteTodo(todoItems)} value={todoItems}>delete</button>
      </div>
    );
  }

}


export default TodosList;