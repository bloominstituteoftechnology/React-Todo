import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.todo.id,
      todo: props.todo.text,
      completed: props.todo.completed,
    }
    this.toggleCompleted.bind(this);
    this.deleteTodo.bind(this);
  }

  toggleCompleted = (event) => {
    this.props.toggleCompleted(this.state.id);
    this.setState({ completed: !this.state.completed })
    
    event.stopPropagation();
  }

  deleteTodo = (event) => {
    this.props.deleteTodo(this.state.id);

    event.stopPropagation();
  }

  render() {
    console.log('rerender')
    const styles = this.state.completed ? { opacity: 0.2 } : { opacity: 1.0 }
    return (
      <div style={ styles }>
        <button onClick={this.deleteTodo}>x</button>&nbsp;
        <button onClick={this.toggleCompleted}>✓</button>&nbsp;&nbsp;
        {this.state.todo}
      </div>
    )
  }
}

export default Todo;