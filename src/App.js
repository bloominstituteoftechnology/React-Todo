import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todoData = [
  {
    task: "Eat Bananas",
    id: 1,
    completed: false
  },
  {
    task: "Eat Torillas",
    id: 2,
    completed: false
  },
  {
    task: "Eat Milk",
    id: 3,
    completed: false
  },
  {
    task: "Eat Pizza Sauce",
    id: 4,
    completed: false
  },
  {
    task: "Eat Raw Honey",
    id: 5,
    completed: false
  },
  {
    task: "Eat Granola",
    id: 6,
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
      todoData: todoData
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
      todoData: [...this.state.todoData, newTodo]
    });
  };
  toggleCompleted = id => {
    this.setState({
      todoData: this.state.todoData.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      todoData: this.state.todoData.filter(item => {
        if (item.completed === false) {
          return {};
        }
      })
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm
            addTodo={this.addTodo}
            clearCompleted={this.clearCompleted}
          />
        </div>
        <TodoList
          toggleCompleted={this.toggleCompleted}
          todoData={this.state.todoData}
        />
      </div>
    );
  }
}

export default App;
