import React, {Component } from "react";
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm";
import "../src/components/TodoComponents/Todo.css";

// assign the variable todoAll to the array/list
const todoAll = [
  {
      task: 'Eat dinner',
      id: 1800,
      completed: false
  },
  {
      task: 'Study React',
      id: 1830,
      completed: false
  },
  {
      task: 'Class Time',
      id: 1900,
      completed: false
  },
  {
      task: 'Bedtime',
      id: 2200,
      completed: false
  }
];

// initialize state
class App extends Component {
  constructor() {
    super();
    this.state = {
      initialTodoList: todoAll
    };
  };

  addTask = newTask => {
    const newTodoTask = {
      task: newTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      initialTodoList: [...this.state.initialTodoList, newTodoTask]
    });
  };

  toggleTaskComplete = id => {
    const newList = this.state.initialTodoList.map(task => {
      if (task.id === id) {
        const newTodo = {
          ...task,
          completed: !task.completed
        };
        return newTodo;
      } else {
        return task;
      }
    });

    this.setState({ initialTodoList: newList });
  };

  render() {
    return (
      <div className="App">
        <div className="todo-list">
          <h1>Todo List</h1>
          <TodoList
            todoAll={this.state.initialTodoList}
            toggleTaskComplete={this.toggleTaskComplete}
          />
          <TodoForm
            addNewTask={this.addTask}
          />
        </div>
      </div>
    );
  };
};

export default App;