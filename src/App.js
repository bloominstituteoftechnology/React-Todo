import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: [
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
      data: ""
    };
  }

  onChangeHandler = event => {
    event.preventDefault();
    const newState = this.state;
    newState.data = event.target.value;
    this.setState(newState);
  };
  onSubmitHandler = event => {
    event.preventDefault();
    let store = [...this.state.store];
    let newEntry = { task: this.state.data, id: Date.now(), completed: false };
    store = store.concat([newEntry]);
    this.setState({ store: store });
    console.dir(event);
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
         <h1>TODO APP</h1>
        <TodoList todoData={this.state.store} />
        <TodoForm change={this.onChangeHandler} submit={this.onSubmitHandler} />
      </div>
    );
  }
}

export default App;
