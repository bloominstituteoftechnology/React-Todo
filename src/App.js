import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import Todo from "./components/TodoComponents/Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doList: [],
      addItems: ""
    };
  }

  listChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    const doList = this.state.doList.slice();
    doList.push({task: this.state.addItems, completed: false, id: Date.now() });
    this.setState({ doList: doList, addItems: "" });
  };

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <div><TodoForm /></div>
        <button onClick={this.addTodo}>Add Todo..</button>
        <TodoList listItems={this.state.doList} />
      </div>
    );
  }
}

export default App;
