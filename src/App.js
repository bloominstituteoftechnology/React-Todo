
import React, { Component } from "react";
import "./components/TodoComponents/Todo.css";
// import TodoList from './components/TodoComponents/TodoList';
// import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  updateTodo(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addTodo() {
    // create a new item
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Stacy's Todo List</h1>
        </header>
        <div>
                
          What needs to be done
          <br />
          <input
            type="text"
            placeholder="Type item here"
            value={this.state.newItem}
            onChange={e => this.updateTodo("newItem", e.target.value)}
          />
          <button
            onClick={() => this.addTodo()}
            disabled={!this.state.newItem.length}
          >
            &#43; Add
          </button>
          <br /> <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;