import React from "react";
import List from "./components/TodoComponents/TodoList";
import Form from "./components/TodoComponents/TodoForm";

let todoList = [
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

  state = {
    list: [],
    task: "",
    id: "",
    completed: false
  };

  handleChanges = e => {
    this.setState({
      task: e.target.value
    });
  };

  handleAddTask = e => {
    e.preventDefault();
    this.setState({
      list: [
        ...this.state.list,
        {
          task: this.state.task,
          id: Date.now(),
          completed: this.state.completed
        }
      ],
      task: ""
    });
  };

  toggleComplete = id => {
    this.setState({
      list: this.state.list.map(list => {
        if (list.id === id) {
          return {
            ...list,
            completed: !list.completed
          };
        }
        return list;
      })
    });
  };

  handleRemoveTask = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.filter(list => list.completed !== true)
    });
  };

  render() {
    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="heading">My Todo List..</h1>
          <List tasks={this.state.list} toggleComplete={this.toggleComplete} />
          <Form
            task={this.state.task}
            handleChange={this.handleChanges}
            handleAddTasks={this.handleAddTask}
            handleRemoveTask={this.handleRemoveTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
