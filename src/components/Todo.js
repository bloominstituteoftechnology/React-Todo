import React, { Component } from 'react';

class Todo extends Component{
    constructor(props) {
      super(props);
      this.state = {
          text: props.text,
          completed: props.completed,
         // click: false,
      };
    }
  
    handleTodoClick = () => {
      //  this.setState({click: !this.state.click });
      this.setState({completed: !this.state.completed });
    };

    // remove = () => {
    //     this.props.remove(this.props.index);
    // }
  
    render() {
        const styles = this.state.completed ? 
        { textDecoration: 'line-through' } : 
        { textDecoration: 'none' };
      return(
        <div>
          <span style={styles} onClick={this.handleTodoClick}>{this.props.todo.text}</span>
          <button onClick={this.props.delete}>X</button>

       </div>
      );
    }
  }

  export default Todo;
