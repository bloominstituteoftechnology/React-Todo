import React from 'react';
import Todo from "./components/TodoComponents/Todo"
import data from "./index.js"
import TodoList from "./components/TodoComponents/Todoform"
import "./components/TodoComponents/Todo.css";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    groceries: data,
    otherState: "this other state"
  };
  togglePurchased = itemId => {
    console.log("togglePurchased: ", itemId);
    this.setState({
        groceries: this.state.groceries.map(item => {
          if (item.id === itemId) {
            return {
              ...item,
              purchased: !item.purchased
            };
          }
          return item;
        })
      });
    };

    clearPurchased = () => {
      console.log("clearPurchased");
      this.setState({
        groceries: this.state.groceries.filter(item => {
          return !item.purchased;
        })
      });
    };

    addItem = itemName => {
      console.log("add item: ", itemName);

      this.setState({
        groceries: [
          ...this.state.groceries,
          {
            name: itemName,
            id: Date.now(),
            purchased: false
          }
        ]
      });
    };


render() {
console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <div className="Add">
        <TodoList addItem={this.addItem} />
        </div>
         <div className="Itembox">
        <Todo
          groceries={this.state.groceries}
          togglePurchased={this.togglePurchased}
          clearPurchased={this.clearPurchased}
        />
      </div>
      </div>
    );
  }
}



export default App;
