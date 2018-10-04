import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and
  //any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      toDoData: [
        {
          task: "Meet new girl",
          id: Date.now(),
          completed: false
        },
        {
          task: "Ask her out on a date",
          id: Date.now(),
          completed: false
        },
        {
          task: "Go on the date",
          id: Date.now(),
          completed: false
        },
        {
          task: "Get engaged",
          id: Date.now(),
          completed: false
        },
        {
          task: "Get married",
          id: Date.now(),
          completed: false
        },
        {
          task: "Determine we are both assassins",
          id: Date.now(),
          completed: false
        },
        {
          task: "Start the plot of the movie Mr. and Mrs. Smith",
          id: Date.now(),
          completed: false
        }
      ],
      inputText: "",
      newTask: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addToDoHandler = event => {
    event.preventDefault();
    this.setState({
      toDoData: [...this.state.toDoData, { task: this.state.newTask }], //do I need to add id: and completed: to this?
      newTask: ""
    });
  };

  render() {
    return (
      <div>
        <TodoList newTask={this.state.newTask} toDoData={this.state.toDoData} />
        <TodoForm
          addToDoHandler={this.addToDoHandler}
          inputText={this.state.inputText}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;

/* 
<App /> will hold all the data needed for this project. It will also be the container for your Todo Components.
All of your application data will be stored here on <App />.
All of your handler functions should live here on <App />.
 */
