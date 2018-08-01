import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const tasksArray = [
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
  constructor() {
    super();
    this.state = {
      title: "Todo List: MVP",

      tasks: tasksArray,

      value: ""
    };
  }

  handleUpdateState = () => {
    const tasks = this.state.tasks.slice();
    console.log(tasks);
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <TodoList todoListArr={this.state.tasks} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
