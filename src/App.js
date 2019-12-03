import React from 'react';
import Todo from "./components/TodoComponents/Todo"
import data from "./index.js"
import TodoList from "./components/TodoComponents/TodoList"
import "./components/TodoComponents/Todo.css";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
    state = {
        stuff: data,
        otherState: "this other state"
      };
      togglePurchased = itemId => {
        console.log("togglePurchased: ", itemId);
        this.setState({
            stuff: this.state.stuff.map(item => {
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
            stuff: this.state.stuff.filter(item => {
              return !item.purchased;
            })
          });
        };
      
        addItem = itemName => {
          console.log("add item: ", itemName);
      
          this.setState({
            stuff: [
              ...this.state.stuff,
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
              <h1>Jess' Todo List</h1>
              <TodoList addItem={this.addItem} />
            </div>
            <Todo
              stuff={this.state.stuff}
              togglePurchased={this.togglePurchased}
              clearPurchased={this.clearPurchased}
            />
          </div>
        );
      }
    }
     
export default App;
