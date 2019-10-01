import React from "react";
import "./index.css";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.todo,
      key: Date.now(),
      completed: false
    };

    this.setState(currState => {
      return {
        items: currState.items.concat(newItem),
        todo: ""
      };
    });
  }

  deleteItem() {
    this.setState(currentState => ({
      items: currentState.items.filter(item => {
        return !item.completed;
      })
    }));
  }

  todoOnChange = event => {
    this.setState({
      todo: event.target.value
    });
  };

  toggleComplete = key => event => {
    this.setState(currentState => ({
      items: currentState.items.map(item => {
        if (item.key !== key) return item;
        return { ...item, completed: !item.completed };
      })
    }));
  };

  render() {
    return (
      <div className="todoListMain">
        <TodoForm
          addItem={this.addItem}
          deleteItem={this.deleteItem}
          todo={this.state.todo}
          todoOnChange={this.todoOnChange}
        />
        <TodoList
          items={this.state.items}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
