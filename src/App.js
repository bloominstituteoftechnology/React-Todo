import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ""
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addNewTodo = e => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { task: this.state.newTodo, id: Date.now(), completed: false }
      ],
      newTodo: ""
    });
    // console.log(this.state.id);
  };

  changeHandler = e => {
    // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  isCompleted = index => {
    // console.log(index);
    this.setState({
      todos: this.state.todos.map((item, idx) => {
        // console.log(item);

        if (index !== idx) {
          return item;
        } else {
          return {
            ...item,
            completed: item.completed === false ? true : false
          };
        }
      })
    });
  };

  clearCompleted = e => {
    this.setState({
      todos: []
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <h2>Todo App: MVP version</h2>
        <TodoForm
          addNewTodo={this.addNewTodo}
          changeHandler={this.changeHandler}
          newTodo={this.state.newTodo}
          clear={this.clearCompleted}
        />
        <TodoList taskList={this.state.todos} isCompleted={this.isCompleted} />
      </div>
    );
  }
}

export default App;
