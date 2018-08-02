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

      inputValue: '',
    };
  }

  updateInputValue = event => {
    const { value } = event.target;
    this.setState({ inputValue: value });
  };

  submitNewTask = event => {
    event.preventDefault();

    this.setState(prevState => ({
        list: prevState.tasks.concat({
        id: new Date(),
        task: prevState.inputValue,
        completed: false,
      }),
      inputValue: ''
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <TodoList taskList={this.state.tasks} />
        <TodoForm 
        inputValue={this.state.inputValue}
        updateInputValue={this.updateInputValue}
        submitNewTask={this.submitNewTask}
        />
      </div>
    );
  }
}

export default App;
