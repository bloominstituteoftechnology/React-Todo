// IDEA Impose length limit, add deletable tasks.

import React, { Component } from 'react';
import List from './List';

const previousToDos = []; // Storing previous ToDo's in an array so I can easily search for duplicates.

class ToDoList extends Component { // Create a new Component called ToDoList.
  constructor() {
    super();
    this.state = {
      newToDo: '',
      ToDos: []
    };

    this.updateNewToDo = this.updateNewToDo.bind(this); // TODO not sure what this does exactly.
    this.addToDo = this.addToDo.bind(this);
  }

  updateNewToDo(event) {
    this.setState({
      newToDo: event.target.value
    });
  }

  addToDo(event) {
    event.preventDefault(); // Disable the default behavior of refreshing the page upon clicking enter.
    document.getElementById("mainInput").value = ""; // Clear input field.

    if (!previousToDos.includes(this.state.newToDo)) { // Check for duplicates.
      console.log(`Adding '${this.state.newToDo}' to the list.`);
      previousToDos.push(this.state.newToDo);

      if (document.getElementById('response').innerHTML) document.getElementById('response').innerHTML = ''; // If the response box needs to be cleared, do so.
    } else {
      document.getElementById('response').innerHTML = `'${this.state.newToDo}' is already on the list.`; // Inform user of a duplicate.
      return; // Break function.
    }

    this.setState({ // TODO not sure what this does exactly.
      newToDo: '',
      ToDos: this.state.ToDos.concat({
        text: this.state.newToDo,
        completed: false
      }) // Set the ToDos equal to the current ToDos plus the newToDo object.
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addToDo}>
          <input
            id="mainInput"
            autoComplete="off"
            onChange={this.updateNewToDo} // On each key press in the form, invoke updateNewToDo with the keypress.
            placeholder="What's next?"
          autoFocus/>
        </form>
        <div id="response"></div>
        <List ToDos={this.state.ToDos} />
      </div>
    );
  }
}

export default ToDoList;
