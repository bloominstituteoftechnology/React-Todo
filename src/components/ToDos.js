import React from "react";
import ToDosList from "./ToDosList"

const styles = {
    fontFamily: "sans-serif",
    textAlign: "left"
  };
  
  class App extends Component {
    constructor() {
      super();
      this.state = {
        newItem: "",
        items: ["groceries", "laundry"]
      };
    }
  
    handleAddItem = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    handleSubmitItem = () => {
      const { items } = this.state;
      items.push(this.state.newItem);
      this.setState({ items, newItem: "" });
    };
  
    render() {
      return (
        <div style={styles}>
          <h2>My To Do List</h2>
          {/* <ToDosList {...this.state} /> */}
          {ToDosList(this.state)}
          <input
            type="text"
            name="newItem"
            value={this.state.newItem}
            placeholder="add item"
            onChange={this.handleAddItem}
          />
          <button onClick={this.handleSubmitItem}>Add Item</button>
        </div>
      );
    }
  }

  export default ToDos;