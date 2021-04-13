import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


class App extends React.Component {
  state = {
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
    ]
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
  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  //submit handler


  //remove todo
  removeTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };


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