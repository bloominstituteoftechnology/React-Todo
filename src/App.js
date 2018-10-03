import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import Todo from "./components/TodoComponents/Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      id: Date.now(),
      completed: false,
      newTodo: ""
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  inputTextHandler = e => {
    e.preventDefault();
  };

  addNewTodo = e => {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, { taskName: this.state.newTodo }],
      newTodo: ""
    });
    console.log(this.state.id);
  };

  changeHandler = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  clearCompleted = e => {
    this.setState({
      tasks: []
    });
  };

  render() {
    // console.log(this.state.todo.task);
    return (
      <div>
        <h2>Todo App: MVP version</h2>
        <TodoList taskList={this.state.tasks} />
        {/* <Todo /> */}
        <TodoForm
          addNewTodo={this.addNewTodo}
          changeHandler={this.changeHandler}
          newTodo={this.state.newTodo}
          clear={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
