import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";
const data = [
  {
    task: "Be Happy!",
    id: 1,
    done: false
  },
  {
    task: "Meditate!",
    id: 2,
    done: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      things: data // there's a property called things that has an initial state of data
    };
  }
  addItem = name => {
    const newItem = {
      task: name,
      id: Date.now(),
      done: false
    }; // every time we use addItem it will create a new item that has the above properties
    this.setState({
      things: [...this.state.things, newItem]
    });
  };

  toggleDone = id => {
    this.setState({
      things: this.state.things.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          };
        } else {
          return item;
        }
      })
    });
  };

  clearDone = () => {
    this.setState({
      things: this.state.things.filter(task => !task.done)
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <button className="clear" onClick={this.clearDone}>
          Clear Completed
        </button>
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <TodoList toggleDone={this.toggleDone} things={this.state.things} />
      </div>
    );
  }
}

export default App;
