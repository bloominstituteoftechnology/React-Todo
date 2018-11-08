import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
const myList = [
  { listItem: "Stuff", id: 1, completed: false },
  { listItem: "more stuff", id: 2, completed: false }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listItems: myList,
      inputText: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  addItem = event => {
    event.preventDefault();
    this.setState({
      listItems: [
        ...this.state.listItems,
        { listItem: this.state.inputText, id: Date.now(), completed: false }
      ],
      inputText: ""
    });
  };
  render() {
    return (
      <div>
        <TodoList todoItems={this.state.listItems} />
        <TodoForm
          addListItem={this.addItem}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
export default App; 
