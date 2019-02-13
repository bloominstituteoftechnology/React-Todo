import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
const tasks = [
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
  constructor() {
    super();
    this.state = {
      tasks: tasks,
      input: "test"
    };
  }

  addTask = e => {
    e.preventDefault();
    

    const newTask = {
      task: this.state.input,
      id: Date.now(),
      completed: false

    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
      input: ""
    });
  };

  handleChanges = e => {
    this.setState({input: e.target.value})
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} />
        <TodoForm
          handleSubmit={this.addTask}
          handleChanges={this.handleChanges}
          task={this.state.input}
        />
      </div>
    );
  }
}

export default App;

{
  /* {this.state.tasks.map((taskFromMap, index) => (
          <Task key={index} task={taskFromMap} />
        ))}
      </div>
      <TaskForm 
      addTask={this.addTask}
      task={this.state.task}
      handleChanges={this.handleChanges}
      id={this.state.id}
      completed={this.state.completed}
      /> */
}
