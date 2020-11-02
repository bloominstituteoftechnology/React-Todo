import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const todoArray = [
  {
    activity: "Work",
    id: 1528817077286,
    completed: false,
  },
  {
    activity: "Lambda",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { todoArray: todoArray };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggleActivity = (activityId) => {
    this.setState({
      todoArray: this.state.todoArray.map((thing) => {
        if (thing.id === activityId) {
          return {
            ...thing,
            completed: !thing.completed,
          };
        }
        return thing;
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      todoArray: this.state.todoArray.filter((done) => {
        return !done.completed;
      }),
    });
  };

  addActivity = (activityName) => {
    this.setState({
      todoArray: [
        ...this.state.todoArray,
        { activity: activityName, id: Date.now(), completed: false },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <TodoForm addActivity={this.addActivity} />
        <div className="body">
          <TodoList
            todoArray={this.state.todoArray}
            toggleActivity={this.toggleActivity}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
