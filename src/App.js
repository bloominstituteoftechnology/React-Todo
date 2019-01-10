import React from "react";
import List from "./components/TodoComponents/TodoList";
import Form from "./components/TodoComponents/TodoForm";

let todoList = [
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

  state = {
    list: todoList,
    task: "",
    id: 1528817084358,
    completed: false
  };

  handleChanges = e => {
    this.setState({
      task: e.target.value
    });
  };

  handleAddTask = e => {
    e.preventDefault();
    this.setState({
      task: "",
      list: [...this.state.list, { task: this.state.task }]
    });
  };

  render() {
    return (
      <div>
        <List tasks={this.state.list} />
        <Form
          task={this.state.task}
          id={this.state.id}
          handleChange={this.handleChanges}
          handleAddTasks={this.handleAddTask}
        />
      </div>
    );
  }
}

export default App;
