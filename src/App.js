import React from "react";
import Todo from "./components/TodoComponents/Todo";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      inputField: "",

      todoList: [
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
  }
  render() {
    return (
      <div>
        <TodoForm
          inputField={this.state.inputField}
          clickHandler={this.clickHandler}
          messageChangeHandler={this.messageChangeHandler}
        />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
  clickHandler = event => {
    event.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: this.state.inputField,
          id: 1528817084359,
          completed: false
        }
      ],
      inputField: ""
    });
  };
  messageChangeHandler = event => {
    event.preventDefault();
    this.setState({ inputField: event.target.value });
    console.log(this.state.inputField);
  };
}

export default App;
