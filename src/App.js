import React from "react";

const todoList = [
  /* {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  } */
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoList: todoList,
      newTodo: ""
    };
  }

  render() {
    return (
      <div>
        {this.state.todoList.map(todo => (
          <div onClick={this.crossOut}>{todo.task}</div>
        ))}
        <input
          className="input"
          value={this.state.newTodo}
          onChange={this.changeHandler}
          onKeyDown={this.addTodoEnter}
          type="text"
        />
        <button className="btn" onClick={this.addTodo}>
          Add ToDo
        </button>
      </div>
    );
  }

  /*   crossOut = event => {
    this.setState;
  }; */

  changeHandler = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = () => {
    const newTodo = {
      task: this.state.newTodo,
      id: Date.now(),
      completed: false
    };
    this.setState({ todoList: this.state.todoList.concat(newTodo) });
    this.setState({ newTodo: "" });
  };

  addTodoEnter = event => {
    if (event.keyCode === 13) {
      const newTodo = {
        task: this.state.newTodo,
        id: Date.now(),
        completed: false
      };
      this.setState({ todoList: this.state.todoList.concat(newTodo) });
      this.setState({ newTodo: "" });
    }
  };
}

export default App;
