import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myToDoList: [
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
      inputText: "",
      newTask: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTask = e => {
    e.preventDefault();
   let newArray =  Array.from(this.state.myToDoList)
    newArray.push({ task: this.state.inputText, id: Math.floor(Math.random() * 10000000000), completed: false })
    console.log('before',this.state)
    this.setState({myToDoList: newArray, inputText: ""})
    console.log(newArray)
    console.log('after', this.state)

  };

  render() {
    return (
      <div>
        <TodoList myToDoList={this.state.myToDoList} />
        <TodoForm
          changeHandler={this.changeHandler}
          inputText={this.state.inputText}
          addTask={this.addTask}
          newTask={this.state.newTask}
        />
      </div>
    );
  }
}

export default App;
