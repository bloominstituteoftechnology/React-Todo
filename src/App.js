import React from "react";
import "reset-css";
import "normalize.css";
import "./App.css";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      TodoData: [],
      inputText: "Input a Todo",
      newItem: "",
      completed: false
    };
  }

  addNewItem = event => {
    event.preventDefault();
    if (this.state.newItem !== "") {
      this.setState(
        prevState => {
          return {
            TodoData: prevState.TodoData.concat({
              todo: this.state.newItem,
              id: Date.now(),
              completed: false
            }),
            newItem: ""
          };
        },
      );
    }
  };

  formEventHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearHandler = event =>{
    event.preventDefault();
    
    const clearedArray = [...this.state.TodoData].filter(cur => cur.completed === false)

    this.setState({TodoData: clearedArray})
  }


  toggleHandler = event => {
    const toggledArray = [...this.state.TodoData]
    let position = null;

    const target = toggledArray.find((cur, index) => {
      position = index
      return cur.todo === event.target.innerText
    });

    target.completed === false ? target.completed = true : target.completed=false;
    
    toggledArray[position] = target;

    this.setState({TodoData: toggledArray});
  };

  render() {
    return (
      <div className="appContainer">
        <TodoForm
          addNewItem={this.addNewItem}
          inputText={this.state.inputText}
          newItem={this.state.newItem}
          formEventHandler={this.formEventHandler}
          clearButton={this.clearHandler}
        />
        <TodoList todoData={this.state.TodoData} toggleItem={this.toggleHandler} />
      </div>
    );
  }
}

export default App;
