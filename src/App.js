import React from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todos: [
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
      ],
    };
  }

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  handleInputChange = (input) => {
    this.setState({
      input: input,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <TodoList todos={this.state.todos} handleChange={this.handleChange} />
        <TodoForm handleInputChange={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
