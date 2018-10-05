import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./App.css";

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
        {
          todo: this.state.formText,
          id: Date.now(),
          completed: false,
          line: "no-list-line"
        }
      ],
      formText: ""
    });
  };

  // li click
  liClick = id => {
    // console.log(id);

    const filteredTodos = this.state.formData.map(li => {
      if (li.id === id) {
        li.completed = !li.completed;
      }
      return li;
    });
    console.log(filteredTodos === this.state.formData);
    console.log(filteredTodos, this.state.formData);
    // console.log(filteredTodos);
    // console.log(this.state.formData);

    this.setState({
      formData: filteredTodos
    });
    // this.setState({
    //   formData: this.state.formData.map((li, idx) => {
    //     if (index !== idx) {
    //       return li;
    //     } else {
    //       return {
    //         completed: !li.completed,
    //         line: li.line === "no-list-line" ? "list-line" : "no-list-line",
    //         todo: li.todo,
    //         id: Date.now()
    //       };
    //     }
    //   })
    // });
  };

  // clear completed function
  clearCompleted = () => {
    this.setState({
      formData: this.state.formData.filter(li => li.completed === false)
    });
  };
  render() {
    return (
      <div className="app-wrapper">
        <div className="todo-container">
          <TodoList
            // addNewTodo={this.addNewTodo}
            formData={this.state.formData}
            newTodo={this.state.newTodo}
            liClick={this.liClick}
          />
          <TodoForm
            formChange={this.formChange}
            formText={this.state.formText}
            addNewTodo={this.addNewTodo}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
