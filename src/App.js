import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div id="myDIV" className="header">
          <h2>My To Do List</h2>
          <input type="text" id="myInput" placeholder="Title..." />
          <span onclick="newElement()" className="addBtn">
            Add
          </span>
        </div>
        <ul id="myUL">
          <li>Learn setState()</li>
          <li className="checked">Style my Todo list</li>
          <li>Learn React</li>
          <li>Virtual DOM re-write</li>
          <li>Build Todo App</li>
        </ul>
      </div>
        </h2>Welcome to your Todo App!</h2>
    );
  }
}

export default App;
