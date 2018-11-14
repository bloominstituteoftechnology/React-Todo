import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const data = [
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
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: data,
      inputText: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addCharacter = event => {
    event.preventDefault();
    this.setState({
      items: [
        ...this.state.items,
        { task: this.state.inputText }
      ],
      inputText: ""
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My Tasks</h1>
        <TodoList items={this.state.items} />
        <TodoForm
          addCharacter={this.addCharacter}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
