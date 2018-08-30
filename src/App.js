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
          id: Date.now(),
          completed: false
        },
        {
          task: "add completed functionality",
          id: Date.now(),
          completed: false
        },
        {
          task: "finish the project",
          id: Date.now(),
          completed: false
        }
      ],
      inputText: ""
    };
  }
  //methods
  addItem = event => {
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

  itemCompleted(id) {
    console.log("i was clicked");
    this.setState(
      //look for obj that has this id
      this.state.items.forEach(function(item) {
        if (item.id === id) {
          if (item["completed"] === false) {
            // set completed to true
            item["completed"] = true;
            console.log(item.task + " has been completed");
          } else if (item["completed"] === true) {
            // set completed to false
            item["completed"] = false;
            console.log(item.task + " has not been completed");
          }
        }
      })
    );
    console.log(this.state.items);
  }

  singleClickHandler = event => {
    event.preventDefault();
    alert("Cleared!");
  };

  render() {
    return (
      <div className="todo-container">
        <h2>Todo App:</h2>
        <TodoForm
          addItem={this.addItem}
          handleInput={this.handleInput}
          singleClickHandler={this.singleClickHandler}
          inputText={this.state.inputText}
        />
        <TodoList
          items={this.state.items}
          itemCompleted={this.itemCompleted.bind(this)}
        />
      </div>
    );
  }
}

export default App;
