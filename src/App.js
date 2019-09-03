import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

 

  constructor() {
    super();
    this.state = [
        {
          task: "",
          id: "",
          completed: false
        }
      ]
    } 
    
  handleChange = () => {
    console.log("Change handler activated!");
    this.setState([{task: "task has been set"/*{event.target.value}*/}]);
    console.log(this.state.task)
  };

  handleClick = () => {

  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList listArray={this.state} handleChange={this.handleChange}/>
        {console.log(this.state)}
      </div>
    );
  }
}

export default App;
