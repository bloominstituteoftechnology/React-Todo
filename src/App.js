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
    tasks: data,
    otherState: "this other state"
  };
  toggleCompleted = itemId => {
    console.log("toggleCompleted: ", itemId);
    this.setState({
        tasks: this.state.tasks.map(item => {
          if (item.id === itemId) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      });
    };

    clearCompleted = () => {
      console.log("clearCompleted");
      this.setState({
        tasks: this.state.tasks.filter(item => {
          return !item.completed;
        })
      });
    };

    addItem = itemName => {
      console.log("add item: ", itemName);

      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            name: itemName,
            id: Date.now(),
            completed: false
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
          groceries={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
      </div>
    );
  }
}



export default App;
