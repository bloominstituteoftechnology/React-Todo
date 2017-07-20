import React, { Component } from 'react';

// require('!style-loader!css-loader!sass-loader!./index.scss');


class ToDoClass extends Component {
  super() {}
  constructor() {
    this.toDoList = [`pay bills`, `wash car`, `brush teeth`, `take shower`, `mend fence`, `solve rubik’s cube`, `polish My Little Pony statues`]
  }
  render() {
    return (
      <div>
        <ul>
          <li>this.toDoList[0]</li>
          <li>this.toDoList[1]</li>
          <li>this.toDoList[2]</li>
          <li>this.toDoList[3]</li>
          <li>this.toDoList[4]</li>
          <li>this.toDoList[5]</li>
          <li>this.toDoList[6]</li>
        </ul>
      </div>
    )
  }
}

export default ToDoClass;
