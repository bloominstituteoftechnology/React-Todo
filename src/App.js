import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const todoData = [
  // {
  //   task: "Organize Garage",
  //   id: 1528817077286,
  //   completed: false
  // },
  // {
  //   task: "Bake Cookies",
  //   id: 1528817084358,
  //   completed: false
  // }
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

  componentDidMount() {
    const storedTodo = JSON.parse(localStorage.getItem("todos"));
    if (storedTodo) {
      this.setState({ task: storedTodo });
    }
  }

  componentDidUpdate() {
    this.storage = window.localStorage;
    // if (this.state.todos === undefined) {
    //   this.setState({ todos: todoData });
    // }
    // console.log(this.state.todos);

    // this.storage.setItem("list", JSON.stringify(this.state.todo));
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addToDo = event => {
    event.preventDefault();
    const newList = [
      ...this.state.todos,
      {
        task: this.state.todoText,
        id: Date.now(),
        completed: false,
        strike: "none"
      }
    ];

    this.setState({
      todos: newList,
      todoText: ""
    });
    this.storage.setItem("list", JSON.stringify(newList));
  };

  strikeThru = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            strike: todo.strike === "none" ? "line-through" : "none",
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  clearField = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    });
  };

  render() {
    return (
      <div className="ToDo">
        <ToDoList todos={this.state.todos} strikeThru={this.strikeThru} />
        <ToDoForm
          clearField={this.clearField}
          addToDo={this.addToDo}
          todoText={this.state.todoText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
