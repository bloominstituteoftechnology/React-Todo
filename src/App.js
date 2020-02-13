import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todoItems = [
  {
    task: "Become a REACT Jedi",
    id: 123,
    completed: false
  },
  {
    task: "Learn SQL",
    id: 1234,
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
      todoItems
    };
  }

  addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todoItems: [...this.state.todoItems, newItem]
    });
  };

  toggleItem = itemId => {
    console.log(itemId);

    this.setState({
      todoItems: this.state.todoItems.map(item => {
        console.log(item);
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearChecked = e => {
    e.preventDefault();
    console.log(this.state.todoItems);
    this.setState({
      todoItems: this.state.todoItems.filter(item => item.completed === false)
    });
    console.log(this.state.todoItems);
  };

  render() {
    console.log("rendering...");
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <div>
          <TodoList
            todoItems={this.state.todoItems}
            toggleItem={this.toggleItem}
            clearChecked={this.clearChecked}
          />
        </div>
      </div>
    );
  }
}

export default App;
