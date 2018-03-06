import React, { Component } from 'react';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      items: [], 
      listItems: ''
    };
  }
}

// listItemsInput = (event) => {
//   this.setState ({ listItems: event.target.value });
// }

// addlistItems = (event) {
//   event.preventDefault();

// }

export default ToDoList;