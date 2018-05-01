import React, { Component } from 'react';
import TodoList from "./components/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      item: ""
    }
  };
  render() {
    console.log(this.state.items)
    return (
      <div className="wrapper">
        <h1>This is an awesome ToDo List!</h1>
        <input
          name="item" // should be known as the state.value of the thing we update
          onChange={this.handleNewItem}
          value={this.state.item} // should be bound to the state.value of thing we update
          placeholder="Want to add an Item?"
        />
        <button className="btn btn-primary" onClick={this.handleItemSubmition}>Yes Please!</button>
        <TodoList items={this.state.items} />
      </div>
    )
  }
  handleNewItem = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleItemSubmition = () => {
    const items = this.state.items;
    const item = { item: this.state.item, id: this.state.item + items.length }
    items.push(item)
    this.setState({ items: items, item: "" })
  }
}


// const App = () => (
//   <div>
//     <h2>Todo App</h2>

//   </div>
// );

export default App;
