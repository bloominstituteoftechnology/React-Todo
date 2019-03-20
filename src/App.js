import React from "react";
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";

const TodoArray = [
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
  constructor() {
    super();

    this.state = {
      todo: TodoArray,
      task: ''
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.task]: event.target.value
    });
  };

  updateList = event => {
    event.preventDefault();
    const newTask = {
      task: this.state.task
    };

    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };

  render() {
    return (
      <div className="todoListMain">
        <h2>Todo App</h2>

        <TodoList TodoList={this.state.todo} />
        <TodoForm 
            inputValue={this.state.task}
        />
      </div>
    );
  };
}

export default App;
