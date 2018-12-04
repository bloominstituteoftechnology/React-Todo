import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      TodoData: [],
      inputText: "Input a Todo",
      newItem: "",
      completed: false
    };
  }

  addNewItem = event => {
    event.preventDefault();
    const selectTextInput = document.querySelector('input[type="text"]');
    if (selectTextInput.value !== "") {
      this.setState({
        TodoData: [
          ...this.state.TodoData,
          {
            todo: this.state.newItem,
            id: Date.now(),
            completed: this.state.completed
          }
        ],
        newItem: ""
      });
    }
  };

  formEventHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="appContainer">
        <TodoForm
          addNewItem={this.addNewItem}
          inputText={this.state.inputText}
          todoData={this.state.TodoData}
          newItem={this.state.newItem}
          formEventHandler={this.formEventHandler}
        />
        <TodoList todoData={this.state.TodoData} />
      </div>
    );
  }
}

export default App;
