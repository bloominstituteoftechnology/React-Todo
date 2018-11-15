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

  addItem = event => {
    event.preventDefault();
    this.setState({
      items: [
        ...this.state.items,
        { task: this.state.inputText, id: Date.now(), completed: false }
      ],
      inputText: ""
    });
  };

  changeCompleted = id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: item.completed === false ? true : false
          };
        } else {
          return item;
        }
      })
    });
  };

  clearFalse = event => {
    event.preventDefault();
    this.setState({
      items: this.state.items.filter(item => item.completed === false)
    });
  };

  render() {
    return (
      <div className="App">
        <h2>My Tasks</h2>
        <TodoList
          items={this.state.items}
          changeCompleted={this.changeCompleted}
        />
        <TodoForm
          clearFalse={this.clearFalse}
          addItem={this.addItem}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
