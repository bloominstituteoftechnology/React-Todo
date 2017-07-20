import React, { Component } from 'react';
import ShowTodo from './showTodo';

class todoListMain extends Component {
  
  render() {
      return (
        <div className="todoListMain">
          <div>
            <form onSubmit={this.addItem}>
              <input placeholder="Enter task..." ref={ (input) =>  this.textInput = input }></input>
              <button type="submit"> add task</button>
            </form>
          </div>
        </div>
      );
  }
}

export default todoListMain;
