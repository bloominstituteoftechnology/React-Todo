import React from 'react';
import Todo from "./components/TodoComponents/Todo.js"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Its working",
      TodoList: [
        { entry: "0" },
        { entry: "1" },
        { entry: "2" },
        { entry: "3" },
        { entry: "4" },
        { entry: "5" },
        { entry: "6" }
      ]
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
        <div>
          <input type='text' name='name' />   
          <Todo list={this.state.TodoList} />
        </div>

    );
  }
}

export default App;
