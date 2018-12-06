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
      stateList: []
    };
  }

  handleInputChange = e => {
    e.preventDefault();
    this.state.stateList.push({
      task: e.target.parentNode.children[0].value,
      id: Date.now(),
      completed: false
    });
    e.target.parentNode.children[0].value = "";
    this.setState({
      stateList: this.state.stateList.filter(e => {
        if (e.task !== "" && e.task !== undefined) {
          return true;
        } else {
          return false;
        }
      })
    });
  };
  handleClear = _ => {
    if (this.state.stateList.length > 0) {
      this.setState({
        stateList: this.state.stateList.filter(e => {
          if (e.task !== "" && e.task !== undefined) {
            if (!e.completed) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        })
      });
    }
  };
  handleStrike = id => {
    this.setState({
      stateList: this.state.stateList.map(e => {
        if (e.id === id && e.completed === false) {
          return { task: e.task, id: e.id, completed: true };
        } else if (e.id === id && e.completed === true) {
          return { task: e.task, id: e.id, completed: false };
        } else {
          return e;
        }
      })
    });
  };
  render() {
    return (
      <div className="todo">
        <h2 className="todo__title">Todo list: MVP</h2>
        <TodoList list={this.state.stateList} strike={this.handleStrike} />
        <TodoForm
          change={this.handleInputChange}
          clearCompleted={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
