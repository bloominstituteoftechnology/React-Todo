import React from "react";
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
    completed: ""
  },
  {
    task: "redeem GBPs",
    id: 5,
    completed: ""
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todoItems,
      inputText: ""
      // strikeThrough: false
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
          completed: ""
        }
      ],
      inputText: ""
    });
  };

  markCompleted = ev => {
    console.log(ev.target);
    // if (ev.target.completed) {
    //   ev.target.style.textDecoration = "none";
    //   ev.target.completed = false;
    // }
    if (!ev.target.completed) {
      ev.target.classList.toggle("completed");
      ev.target.completed = "";
      // ev.target.strikeThrough = "true";
      // ev.target.completed = 1;
      // ev.target.completed = undefined;
      // ev.target.style.textDecoration = "line-through";
      // console.log(ev.target.completed);
    }
  };

  clearHandler = ev => {
    ev.preventDefault();
    this.setState({
      todo: [
        ...this.state.todo.filter(item => Object.values(item).includes(false))
      ]
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
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
