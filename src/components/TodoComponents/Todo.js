import React, { Component } from 'react';

class Todo extends Component {
    constructor (props) {
        super(props);

        this.state = { task: '' };
    }


  render() {
      return (
        <div>
            <input 
            value={this.state.task} 
            onChange={event => this.setState({ task: event.target.value })}
            />
        </div>
      );
  }  
}

export default Todo;