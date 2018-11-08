import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import SearchForm from "./components/TodoComponents/SearchForm";
const myList = [
  { listItem: "Fun", id: 1, completed: false },
  { listItem: "Stuff", id: 2, completed: false }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listItems: myList,
      inputText: " "
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
      inputText: " "
    });
  };
  itemComplete = id => {
    this.setState({
      listItems: this.state.listItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: item.completed === true ? false : true
          };
        } 
        else {
          return item;
        }
      })
    });
  };
  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      listItems: this.state.listItems.filter(item => !item.completed)
    });
  };
  searchItems = event => {
    event.preventDefault();
    this.setState({
      listItems: this.state.listItems.map(item => {
        if (!item.listItem.includes(`${this.state.searchText}`)) {
          return { ...item, display: false };
        } else {
          return { ...item, display: true };
        }
      })
    });
  };
  clearSearch = event => {
    event.preventDefault();
    this.setState({
      listItems: this.state.listItems.map(item => {
        return { ...item, display: true };
      })
    });
  };
  render() {
    return (
      <div>
        <SearchForm
          searchText={this.state.searchText}
          handleChange={this.handleChange}
          searchItems={this.searchItems}
          clearSearch={this.clearSearch} />

        <TodoList todoItems={this.state.listItems} />
        <TodoForm
          addListItem={this.addItem}
          inputText={this.state.inputText}
          handleChange={this.handleChange} />
      </div>
    );
  }
}
export default App;
