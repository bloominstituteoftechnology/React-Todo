import React from "react";
import "./App.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import Search from "./components/TodoComponents/Search";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = {
      todoData: [],
      todoDisplayData: [],
      task: "",
      query: ""
    };
  }
  async componentDidMount() {
    const data = await localStorage.getItem("todoData");
    const todoData = JSON.parse(data);

    this.setState({
      ...this.state,
      todoDisplayData: todoData || [],
      todoData: todoData || []
    });
  }

  handleAddTodo = async event => {
    event.preventDefault();
    const { task } = this.state;

    if (this.state.task === "") {
      alert("You need to enter a new task");
      return;
    }

    const newTask = {
      task,
      id: Date.now(),
      completed: false
    };
    await this.setState(prevState => ({
      todoData: [...prevState.todoData, newTask],
      todoDisplayData: [...prevState.todoDisplayData, newTask],
      task: ""
    }));
    await localStorage.setItem("todoData", JSON.stringify(this.state.todoData));
  };

  toggleTask = async id => {
    const updatedTodoData = this.state.todoData.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    await this.setState({
      ...this.state,
      todoData: updatedTodoData,
      todoDisplayData: updatedTodoData
    });
    await localStorage.setItem("todoData", JSON.stringify(this.state.todoData));
  };

  clearCompleted = async () => {
    const unCompletedTasks = this.state.todoData.filter(
      task => !task.completed
    );
    await this.setState(prevState => ({
      todoData: unCompletedTasks,
      todoDisplayData: unCompletedTasks
    }));
    await localStorage.setItem("todoData", JSON.stringify(this.state.todoData));
  };

  handleTaskChange = event => {
    this.setState({ ...this.state, task: event.target.value });
  };

  handleSearchInput = event => {
    const newDisplayData = this.state.todoData.filter(todo =>
      todo.task.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({
      ...this.state,
      query: event.target.value.toLowerCase(),
      todoDisplayData: newDisplayData
    });
  };

  render() {
    const { todoDisplayData, todoData, task, query } = this.state;
    const displayTasksCount = todoDisplayData.length;
    const todoTasksCount = todoData.length;
    return (
      <div className="app">
        <h2>Welcome to My Todo App!</h2>

        <Search query={query} handleSearchInput={this.handleSearchInput} />

        <TodoList
          todoData={todoDisplayData}
          handleToggleTask={this.toggleTask}
        />
        {todoTasksCount === 0 && <p>You have not yet added any tasks</p>}
        {displayTasksCount === 0 && query.length > 0 && (
          <p>No matching tasks were found</p>
        )}
        <TodoForm
          task={task}
          handleTaskChange={this.handleTaskChange}
          addTodo={this.handleAddTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
