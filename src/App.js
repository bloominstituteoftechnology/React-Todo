import React from "react";
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
    const { todoDisplayData, task, query } = this.state;
    return (
      <div>
        <h2>Welcome to My Todo App!</h2>

        <Search query={query} handleSearchInput={this.handleSearchInput} />
        <TodoList todoData={todoDisplayData} />
        <TodoForm
          task={task}
          handleTaskChange={this.handleTaskChange}
          addTodo={this.handleAddTodo}
        />
      </div>
    );
  }
}

export default App;
