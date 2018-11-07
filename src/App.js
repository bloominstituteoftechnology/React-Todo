import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const todoData = [
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
      todos: todoData,
      todoText: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addToDo = event => {
    event.preventDefault();

    this.setState({
      todos: [
        ...this.state.todos,
        { task: this.state.todoText, id: Date.now(), complete: false }
      ],
      todoText: ""
    });
  };

  render() {
    return (
      <div className="ToDo">
        <ToDoList todos={this.state.todos} />
        <ToDoForm
          addToDo={this.addToDo}
          todoText={this.state.todoText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
