import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      task: ""
    };
  }

  handleInput = event => {
    this.setState({ task: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        list: prevState.list.concat({
          id: Date.now(),
          task: this.state.task,
          complete: false
        }),
        task: ""
      };
    });
  };

  completeHandler = id => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return {
            id: item.id,
            task: item.task,
            complete: !item.complete
          };
        } else {
          return item;
        }
      })
    });
  };

  clearHandler = () => {
    this.setState({
      list: this.state.list.filter(item => !item.complete)
    });
  };

  render() {
    return (
      <div className='container'>
        <h2 className='main-title'>Welcome to your Todo List!</h2>
        <TodoForm
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          value={this.state.task}
        />
        <TodoList
          completeHandler={this.completeHandler}
          list={this.state.list}
        />
        <input className='clear-completed' type="submit" value="Clear Completed" onClick={this.clearHandler} />
      </div>
    );
  }
}

export default App;
