import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  state = {
    todos: todos,
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // method for crossing out completed items

  //method for adding new todo
  addTodo = (todo) => {
    const newTodo = {
      task: "",
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  //change handler
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  //submit handler

  render() {
    return (
      <div className="App">
        <h2 className="header">Welcome to your Todo App!</h2>
        <TodoForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          addTodo={this.addTodo}
        />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
