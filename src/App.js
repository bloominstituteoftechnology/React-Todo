import React from 'react';
import Todo from './components/TodoComponents/Todo';
import ToDoList from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
      constructor() {
    super();
    this.state = {
      title: "Todo List: MVP",
      items: [
        "Get bloodwork done",
        "Make dentist appointment",
        "Refine JavaScript skills",
        "Go over React content until it starts to click; then practice",
        "Send Sam a birthday video",
      ],
      newItem: ""
    };
  }

  changeTitleHandler = event => {
    console.log(event.target.value);
    this.setState({ newItem: event.target.value });
  };

  addItem = () => {
    const items = this.state.items.slice();
    items.push(this.state.newItem);
    this.setState({ items: items, newItem: "" });
  };

  render() {
    console.log("Render Called!");
    return (
      <div>
        <h2>{this.state.title}</h2>
        <input
          type="text"
          onChange={this.changeTitleHandler}
          placeholder="Add newItem"
          value={this.state.newItem}
        />
        <button onClick={this.addnewItem}>Add newItem </button>
        <ToDoList newToDo={this.state.items} />
      </div>
    );
  }
}

export default App;