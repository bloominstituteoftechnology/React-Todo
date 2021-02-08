import React from "react";
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  // Constructor Function:
  constructor() {
    super();
    this.state = {
      list: [
        {
          task: "Bake Cookies",
          id: 12121,
          completed: false
        },
        {
          task: "Organize Closet",
          id: 12130,
          completed: false
        },
      ]
    }
  }

  // Handler Functions:
  handleAdd = () => {

  }

  handleClear = () => {
    
  }

  render() {
    return (
      <div className="container">
        <TodoList list={this.state.list}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
