import React from "react";
import ToDoList from "./components/TodoComponents/ToDoList";
import ToDoForm from "./components/TodoComponents/ToDoForm";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          task: "Create App Component",
          completed: false
        },
        {
          id: 2,
          task: "Create ToDo List Component",
          completed: false
        },
      ]
    }
  }

  
    
  render() {
    return (
      <div className="root">
        <ToDoList tasks={this.state.todos} />
        <ToDoForm />
      </div>
    );
  }
}


export default App;


