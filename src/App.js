import React from "react";
import Form from "./components/TodoComponents/TodoForm";
import List from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
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
      ],
      newTodo: ""
    };
  }

  changeHandler = event => {
    console.log(event.target.value);
    this.setState({ newTodo: event.target.value });
  };

  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      todoList: [...this.state.todoList, { task: this.state.newTodo }],
      newTodo: ""
    });
    console.log(this.state.todoList);
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <List todoData={this.state.todoList} />
        <Form addNewTodo={this.addNewTodo} changeHandler={this.changeHandler} newTodo={this.state.newTodo} />
      </div>
    );
  }
}

export default App;
