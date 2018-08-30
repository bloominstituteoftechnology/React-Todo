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
      list: [
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
      ],
      input: ""
    };
  }

  addTask = event => {
    let list = this.state.list.slice();
    if (list[0].id === 1528817077286) {
      list.length = 0;
      this.setState({
        list: list
      });
    }
    list.push({
      task: this.state.input,
      id: Math.random(),
      completed: false
    });
    this.setState({
      list: list,
      input: ""
    });
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  crossTodo = event => {
    let list = this.state.list.slice();
    if (list[0].id !== 1528817077286) {
      let xao = list.filter(item => item.task === event.target.textContent);
      if (xao[0].completed === true) {
        xao.forEach(item => (item.completed = false));
      } else if (xao[0].completed === false) {
        xao.forEach(item => (item.completed = true));
      }
    }
    this.setState({ list: list });
  };
  clearCompletedTodos = event => {
    let list = this.state.list.slice();
    let newList = list.filter(item => item.completed !== true);
    if (newList.length === 0) {
      newList.push({
        task: "Go on a walk",
        id: 2342342386839,
        completed: false
      });
      this.setState({ list: newList });
    }
    this.setState({ list: newList });
  };

  render() {
    return (
      <div className="main-container">
        <TodoForm
          addTask={this.addTask}
          clearCompletedTodos={this.clearCompletedTodos}
          value={this.state.input}
          handleChange={this.handleChange}
        />
        <div className="todo-list-container">
          {this.state.list.map(item => (
            <TodoList
              className={item.completed ? "crossOut" : false}
              key={item.id}
              inputValue={item.task}
              crossTodo={this.crossTodo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
