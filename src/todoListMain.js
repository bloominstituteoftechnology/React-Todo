import React, { Component } from 'react';

class todoListMain extends Component {
  render() {
      return (
        <div className="todoListMain">
          <div>
            <form>
              <input placeholder="Enter task..."></input>
              <button type="submit"> add task</button>
            </form>
          </div>
        </div>
      );
  }
}

export default todoListMain;
