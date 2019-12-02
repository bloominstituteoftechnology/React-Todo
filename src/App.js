import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const data = [
  {
    task: "Eat Bananas",
    id: Date.now(),
    completed: false
  },
  {
    task: "Eat Torillas",
    id: Date.now(),
    completed: false
  },
  {
    task: "Eat Milk",
    id: Date.now(),
    completed: false
  },
  {
    task: "Eat Pizza Sauce",
    id: Date.now(),
    completed: false
  },
  {
    task: "Eat Raw Honey",
    id: Date.now(),
    completed: false
  },
  {
    task: "Eat Granola",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData: data
    };
  }
  addTodo = newTodoText => {
    const newTodo = {
      task: newTodoText,
      id: Date.now(),
      completed: false
    };
    //add new item to grocery list
    //need to follow immutability rules
    this.setState({
      groceries: [...this.state.todoData, newTodo]
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList todoData={this.state.todoData} />
      </div>
    );
  }
}

export default App;
