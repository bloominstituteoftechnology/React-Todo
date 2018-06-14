import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import Todo from "./components/TodoComponents/Todo";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = [
      // {
      //   task: "",
      //   id: "",
      //   completed: "false",
      // }
    ];
  }

  addTodoTask = event => {
    this.setState({task: event.target.value});
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        {/* <br></br> */}
        
        <Todo />
      </div>
    );
  }
}

export default App;


