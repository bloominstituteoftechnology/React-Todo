import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: [],
      searchList: [],
      searching: false
    };
    this.searchBox = null;
  }
  search = e => {
    this.searchBox = e.target.parentNode.querySelector(
      ".todo__search__searchbox"
    );
    this.searchBox.classList.toggle("todo__search__hidden");
  };
  searchHandler = e => {
    this.setState({
      searchList: this.state.list.filter(todo => {
        return (
          todo.task.includes(...e.target.value.split``) &&
          todo.task !== undefined &&
          todo.task !== ""
        );
      }),
      searching: e.target.value.length > 0
    });
  };
  handleInputChange = e => {
    e.preventDefault();
    let newTodo = this.state.list.slice();
    newTodo.push({
      task: e.target.parentNode.children[0].value,
      id: Date.now(),
      completed: false
    });
    e.target.parentNode.children[0].value = "";
    this.setState({
      list: newTodo.filter(e => {
        return e.task !== "" && e.task !== undefined;
      })
    });
  };
  handleClear = _ => {
    if (this.state.list.length > 0) {
      this.setState({
        list: this.state.list.filter(e => {
          if (e.task !== "" && e.task !== undefined) {
            return !e.completed;
          } else return false;
        })
      });
    }
  };
  handleAll = _ => {
    console.log("hi");
    this.setState({
      list: []
    });
  };
  handleStrike = id => {
    this.setState({
      list: this.state.list.map(e => {
        if (e.id === id && e.completed === false) {
          return { task: e.task, id: e.id, completed: true };
        } else if (e.id === id && e.completed === true) {
          return { task: e.task, id: e.id, completed: false };
        } else return e;
      })
    });
  };
  render() {
    return (
      <div className="todo">
        <h2 className="todo__title">To-Do list: MVP</h2>
        <span className="todo__search">
          <i onClick={this.search} className="fas fa-search" />
          <input
            type="text"
            placeholder="Search..."
            className="todo__search__hidden todo__search__searchbox"
            onChange={this.searchHandler}
          />
        </span>
        <TodoList
          list={!this.state.searching ? this.state.list : this.state.searchList}
          strike={this.handleStrike}
        />
        <TodoForm
          change={this.handleInputChange}
          clearCompleted={this.handleClear}
          clearAll={this.handleAll}
        />
      </div>
    );
  }
}

export default App;
