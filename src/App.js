import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './components/Todo.css'

const itemLists = [
  {
    name: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemLists: itemLists,
    };
  }
  toggleItem = (id) => {
    console.log(id);
    this.setState({
      itemLists: this.state.itemLists.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };
  addTodo = (todoText) => {
    const newTodo = {
      name: todoText,
      id: new Date(),
      completed: false,
    };
    this.setState({
      itemLists: [...this.state.itemLists, newTodo],
    });
  };

  clearTodo = (e) => {
    e.preventDefault();
    this.setState({
      itemLists: this.state.itemLists.filter((item) => !item.completed),
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="main-container">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} clearTodo={this.clearTodo} />
        <TodoList
          toggleItem={this.toggleItem}
          itemLists={this.state.itemLists}
        />
      </div>
    );
  }
}

export default App;