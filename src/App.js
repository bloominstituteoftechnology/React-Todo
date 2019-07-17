import React from "react";
import { connect } from "react-redux";
import { addTask } from "./actions";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      currentTask: ""
    };
  }
  handleEventChange = event => {
    event.preventDefault();
    this.setState({ currentTask: event.target.value });
    // console.log(this.state.currentTask);
  };
  handleEventFinish = currentId => {
    let newList = this.props.taskList.slice();
    newList = newList.map(task => {
      if (currentId === task.id) {
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    });
    // console.log(this.state.taskList);
  };

  handleClearCompleted = event => {
    event.preventDefault();
    let todoList = this.state.taskList.slice();
    let newTodoList = todoList.filter(todo => todo.completed === false);
    this.setState({ taskList: newTodoList });
    // console.log(this.state.taskList);
    //  console.log(todoList);
    this.setState({ taskList: newTodoList });
  };

  render() {
    return (
      <div>
        <TodoList
          taskList={this.props.taskList}
          handleEventFinish={this.handleEventFinish}
        />
        <TodoForm
          handleEventChange={this.handleEventChange}
          addTask={this.props.addTask}
          currentTask={this.state.currentTask}
          handleClear={this.handleClearCompleted}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskList: state.taskList
  };
};

export default connect(
  mapStateToProps,
  { addTask }
)(App);
