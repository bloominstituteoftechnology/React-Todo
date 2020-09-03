import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const list = [
  {
    task: "Make my Todo App",
    id: 123,
    completed: false,
  },
  {
    task: "Style ToDo App",
    id: 1234,
    completed: false,
  },
  {
    task: "Homeschool the spawn",
    id: 12345,
    completed: false,
  },
  {
    task: "Standup",
    id: 123456,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: list,
    };
  }

  //   checking item completed

  toggleItem = (itemId) => {
    console.log(itemId);
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  //   Clearing Completed Items

  clearCompleted = () => {
    this.state({
      list: this.state.list.filter((item) => {
        return !item.completed;
      }),
    });
  };

  //   Adding new tasks to the list

  addItem = (itemName) => {
    this.setState({
      list: [
        ...this.state.list,
        { id: Date.now(), name: itemName, completed: false },
      ],
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>My To-do List!</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          list={this.state.list}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
