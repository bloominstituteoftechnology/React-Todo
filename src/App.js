import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = {
      todoData: [],
      task: ""
    };
  }
  async componentDidMount() {
    const data = await localStorage.getItem("todoData");
    const todoData = JSON.parse(data);

    this.setState({
      ...this.state,
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
      task: ""
    }));
    await localStorage.setItem("todoData", JSON.stringify(this.state.todoData));
  };

  handleTaskChange = event => {
    this.setState({ ...this.state, task: event.target.value });
  };

  render() {
    const { todoData, task } = this.state;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoList todoData={todoData} />
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
