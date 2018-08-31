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
      items: [],
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
    console.log(this.state);
    //look for obj that has this id

    let newArr = [...this.state.items];

    newArr = newArr.map(function(item) {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    //set new array in state
    this.setState({ items: newArr });
    console.log(this.state);
  }

  clearCompleted = event => {
    console.log("clear was clicked");
    event.preventDefault();
    let newArray = this.state.items.filter(item => item.completed === false);
    this.setState({ items: newArray });
    console.log(newArray);
    console.log(this.state);
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
        <TodoList
          items={this.state.items}
          itemCompleted={this.itemCompleted.bind(this)}
        />
      </div>
    );
  }
}

export default App;
