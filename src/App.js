import React from "react";

const ToDos = [
  {
    todo: "pet cats",
    id: 12,
    completed: false
  },
  {
    todo: "study the TK",
    id: 13,
    completed: false
  },
  {
    todo: "go eat a pizza",
    id: 14,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ToDos
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
