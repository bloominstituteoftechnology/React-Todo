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
    completed: true
  },
  {
    task: "eat tendies",
    id: 4,
    completed: true
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
      inputText: ""
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
    let wow = ev.target.id;
    let newArr = this.state.todo.filter(item => item.id === { wow });
    console.log(newArr);
    console.log(this.state.todo);
  };

  clearHandler = ev => {
    ev.preventDefault();
    this.setState({
      todo: [...this.state.todo.filter(item => item.completed)]
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

// Ideas for Later
// deleteItem = key => {
//   const filteredItems = this.state.items.filter(item => {
//     return item.key !== key
//   })
//   this.setState({
//     items: filteredItems,
//   })
// }
