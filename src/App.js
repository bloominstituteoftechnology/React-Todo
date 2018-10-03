import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      formData: [],
      formText: ""
    };
  }

  // form text event
  formChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // add new todo event
  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      formData: [
        ...this.state.formData,
        { todo: this.state.formText, id: Date.now() }
      ],
      formText: ""
    });
  };
  render() {
    return (
      <div>
        <TodoList
          // addNewTodo={this.addNewTodo}
          formData={this.state.formData}
          newTodo={this.state.newTodo}
        />
        <TodoForm
          formChange={this.formChange}
          formText={this.state.formText}
          addNewTodo={this.addNewTodo}
        />
      </div>
    );
  }
}

export default App;
