import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './index.css';
const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    complete: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    complete: false
  }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: list
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
      list: [...this.state.list, newItem]
    });
  };

  toggleItem = (itemId) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            complete: !item.complete
          };
        }
        return item;
      })
    });
  };

  clearComplete = (e) => {
    e.preventDefault();
    this.setState({
      list: this.state.list.filter((item) => !item.complete)
    });
    console.log(list);
  };


  render() {
    console.log("Rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          list={this.state.list}
          toggleItem={this.toggleItem}
          clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
