import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ]
    };
  
    render() {
      return (
        <div className="App">
        </div>
      );
    }
  }
}
