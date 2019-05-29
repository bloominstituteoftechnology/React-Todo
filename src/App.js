import React from "react";

const todoList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
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
        {this.state.todoList.map(todo => <div>{todo.task}</div>)}
        <input
        value={this.state.newTodo}
        onChange={this.changeHandler}
        type="text"
      />
        <button onClick={this.addTodo}>
          Add ToDo
        </button>
      </div>
    );
  }

  changeHandler = () => {

  }

  addTodo = () => {
    this.setState({todoList: this.state.todoList.concat({task: "sweep floor"}) })
  }
}

export default App;
