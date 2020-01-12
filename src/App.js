import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
const data = [
  {
    task: "Organize Garage!",
    id: 1,
    done: false
  },
  {
    task: "Bake Cookies!",
    id: 2,
    done: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
  constructor(){
    super();
    this.state = {
      things: data // there is a property called things that has an initial state of data
    };
  }
  addItem = name => {
    const newItem = {
      task: name,
      id: Date.now(),
      done: false
    }; // every time addItem is used it will create a new item that has the above properties
    this.setState({
      things: [...this.state.things, newItem]
    });
  };

  toggleDone = id => {
    this.setState({
      things: this.state.things.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          };
        } else {
          return item;
        }
      })
    });
  };

  clearDone = () => {
    this.setState({
      things: this.state.things.filter(task => !task.done)
    });
  };


  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <h2>Todo List: MVP</h2>
        <TodoForm addItem={this.addItem} clearDone={this.clearDone} />
        <TodoList toggleDone={this.toggleDone} things={this.state.things} />
      </div>
    );
  }
}

export default App;