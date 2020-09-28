import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todos = [
  {
    name: "Vaccum",
    id: 123,
    done: false,
  },
  {
    name: "Dishes",
    id: 124,
    done: false,
  },
  {
    name: "Windows",
    id: 125,
    done: false,
  },
  {
    name: "Clean Car",
    id: 126,
    done: false,
  },
  {
    name: "Cook",
    id: 127,
    done: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos,
    };
  }

  addTodo = (e, item) => {
    e.preventDefault();
    const newTodo = {
      name: item,
      id: Date.now(),
      done: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  toggleTodo = (todoId) => {
    console.log(todoId);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      }),
    });
  };

  clearDone = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.done),
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div>
        <div>
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
