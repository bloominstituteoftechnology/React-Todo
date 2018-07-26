import React from "react";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          task: "groceries",
          id: Date.now(),
          completed: false
        }
      ],

      inputValue: ""
    };
  }

  handleTaskChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleAddTodoSubmit = e => {
    e.preventDefault();
    const itemsCopy = this.state.items.slice();
    itemsCopy.push({
      task: this.state.inputValue,
      id: Date.now(),
      completed: false
    });
    this.setState({ items: itemsCopy, inputValue: "" });
  };

  handleStrikeThrough = id => {
    const itemsCopy = this.state.items.slice();

    itemsCopy.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    });

    this.setState({ items: itemsCopy });
  };

  handleCompletedFunction = (completed, id) => {
    const itemsCopy = this.state.items.slice();

    itemsCopy.map(item => {
      if (item.completed === true && item.id === id) {
        this. === 'hidden';
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Todo
          items={this.state.items}
          strikeThrough={this.handleStrikeThrough}
        />

        <TodoForm
          handleTask={this.handleTaskChange}
          handleAddTodo={this.handleAddTodoSubmit}
          handleCompleted={this.handleCompletedFunction}
        />
      </div>
    );
  }
}

export default App;
