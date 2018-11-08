import React from "react";
import "../src/App.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoItems = [
  {
    task: "eat lunch",
    id: 1,
    completed: false
  },
  {
    task: "punch a baby",
    id: 2,
    completed: false
  },
  {
    task: "defenestrate my enemies",
    id: 3,
    completed: false
  },
  {
    task: "eat tendies",
    id: 4,
    completed: false
  },
  {
    task: "redeem GBPs",
    id: 5,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todoItems,
      inputText: "",
      isCompleted: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = ev => {
    ev.preventDefault();

    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: this.state.inputText,
          id: Date.now(),
          completed: false
        }
      ],
      inputText: ""
    });
  };

  markCompleted = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return { ...item, completed: item.completed ? false : true };
        } else {
          return item;
        }
      })
    });
  };

  clearHandler = ev => {
    ev.preventDefault();
    this.setState({
      todo: [...this.state.todo.filter(item => !item.completed)]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Holden's Ugly To-Do List</h1>
        <TodoList todo={this.state.todo} markCompleted={this.markCompleted} />
        <TodoForm
          addItem={this.addTodo}
          clearHandler={this.clearHandler}
          handleChange={this.handleChange}
          inputText={this.state.inputText}
        />
      </div>
    );
  }
}

export default App;
