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

      list: tasksArray,

      inputValue: ""
    };
  }

  updateInputValue = event => {
    const { value } = event.target;
    this.setState({ inputValue: value });
  };

  submitNewTask = event => {
    event.preventDefault();
    console.log(this.state.inputValue);
    this.setState(prevState => ({
      list: prevState.list.concat({
        id: new Date(),
        task: prevState.inputValue,
        completed: false
      }),
      inputValue: ""
    }));
  };

  toggleTodoComplete = id => {
    let list = this.state.list.slice();
    list = list.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ list });
  };

  clearCompleted = () => {
    const list = this.state.list.filter(item => !item.completed);
    this.setState({ list });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          taskList={this.state.list}
        />
        <TodoForm
          inputValue={this.state.inputValue}
          updateInputValue={this.updateInputValue}
          submitNewTask={this.submitNewTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
