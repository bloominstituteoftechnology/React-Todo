import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      name: "",
      itemArray: []
    };
  }

  toggleItem = () => {
    this.setState({
      completed: !this.state.completed
    });
  };
  onChangeEvent = event => {
    console.log(event.target.value);
    this.setState({ ...this.state, name: event.target.value });
  };

  toggleItem = itemId => {
    this.setState({
      ...this.state.name,
      itemArray: this.state.itemArray.map(item => {
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

  deleteItem = () => {
    console.log(1);
    this.setState({
      ...this.state.name,
      itemArray: this.state.itemArray.filter(item => item.completed === false)
    });
  };

  addItem = event => {
    event.preventDefault();
    const newItem = {
      name: this.state.name,
      completed: false,
      id: Date.now()
    };

    this.setState(prevState => ({
      itemArray: [...prevState.itemArray, newItem]
    }));
    // reset form
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          name={this.state.name}
          onChangeEvent={this.onChangeEvent}
          addItem={this.addItem}
          deleteItem={this.deleteItem}
        />
        <TodoList
          itemArray={this.state.itemArray}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
