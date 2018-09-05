import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super(); //lets us access lifecycle methods
    this.state = {
      todoData: [{ todoItem: "Get on computer" }, { todoItem: "Study React" }]
    };
  }

  render() {
    return (
      <div>
        {this.state.todoData.map(todo => {
          return <TodoList todoProp={todo} />;
        })}
      </div>
    );
  }
}

export default App;
