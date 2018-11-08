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

  markCompleted = ev => {
    console.log(ev.target.id);
    ev.target.classList.toggle("completed");
    let value = ev.target.id;
    let objIndex = this.state.todo.findIndex(obj => obj.id == value);
    let object = this.state.todo[objIndex];
    let newArr = this.state.todo;
    object["completed"] = false;
    if (ev.target.classList.contains("completed")) {
      console.log("truth");
      object["completed"] = true;
    }
    console.log(object["completed"]);
    newArr.splice(objIndex, 1, object);
    this.setState({
      todo: [...newArr],
      completed: true
    });
    console.log(this.state.todo);
  };

  clearHandler = ev => {
    ev.preventDefault();
    this.setState({
      todo: [...this.state.todo.filter(item => !item.completed)]
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
