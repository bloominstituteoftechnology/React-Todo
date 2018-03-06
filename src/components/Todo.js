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

    // remove = () => {
    //     this.props.remove(this.props.index);
    // }
  
    render() {
        const styles = this.state.click ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
      return(
        <div style={styles} onClick={this.handleTodoClick}>{this.props.todo}
        <button onClick={this.remove}> X </button>
        </div>
      );
    }
  }

  export default Todo;