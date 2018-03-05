import React, { Component } from 'react';

class Todo extends Component{
    constructor() {
      super();
      this.state = {
          click: false
      };
    }
  
    handleTodoClick = (event) => {
      this.setState({click: !this.state.click });
    };
  
    render() {
        const styles = this.state.click ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
      return(
        <div style={styles} onClick={this.handleTodoClick}>{this.props.todo}</div>
      );
    }
  }

  export default Todo;