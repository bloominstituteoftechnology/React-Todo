import React from "react";
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: [
        {
          task: "Add a to-do item",
          id: 1528817077286,
          completed: false
        }
      ],
      inputText: ""
    };
  }
  //methods
  addItem = event => {
    console.log("i was clicked");
    console.log(this.state.items);
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        items: [
          ...this.state.items,
          {
            task: this.state.inputText,
            id: Date.now(),
            completed: false
          }
        ],
        inputText: ""
      });
    }
  };
  handleInput = event => {
    this.setState({ inputText: event.target.value });
  };

  render() {
    return (
      <div className="todo-container">
        <h2>Todo App:</h2>
        <TodoForm
          addItem={this.addItem}
          handleInput={this.handleInput}
          clearCompleted={this.clearCompleted}
          inputText={this.state.inputText}
        />
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default App;
