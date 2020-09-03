import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todoArray = [
  // { activity: "", id: Date.now(), completed: false },
  // ,
  { activity: "Morning Workout", id: 1232456453244, completed: false },
  { activity: "Face Wash", id: 89786756434543, completed: false },
  { activity: "Piano Practice", id: 23456787435567, completed: false },
  { activity: "Lambda Assignment", id: 235565869857, completed: false },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoArray: todoArray,
    };
  }

  toggleActivity = (ActivityId) => {
    this.setState({
      todoArray: this.state.todoArray.map((thing) => {
        if (thing.id === ActivityId) {
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
      todoArray: this.state.todoArray.filter((activity) => {
        return !activity.completed;
      }),
    });
  };

  addActivity = (activityName) => {
    console.log("adding activity", activityName);
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
        <h1>Todo List</h1>
        <TodoForm addActivity={this.addActivity} />
        <TodoList
          todoArray={this.state.todoArray}
          toggleActivity={this.state.toggleActivity}
          clearCompleted={this.state.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
