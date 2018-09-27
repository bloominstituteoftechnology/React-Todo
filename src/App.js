import React from "react";
import Todo from "../src/components/TodoComponents/Todo";
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";
// import "./src/app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      id: Date.now(),
      completed: false
    };
    this.tasks = [
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
    ];
  }

  handleChange = event => {
    this.setState({
      task: event.target.value,
      id: this.state.id,
      completed: false
    });
  };

  handleSubmit = event => {
    const task = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.tasks.push(task);
    this.setState({
      task: ""
    })
  };

  handleSelected =(id)=> {
   this.tasks.map(todo =>{
     if(todo.id === id){
       todo.completed = this.setState({
         completed:!this.state.completed
       })
     }else{
       return todo;
     }
   })
  };

  render() {
    return (
      <div className="container">
        <TodoList taskLists={this.tasks} selected={this.handleSelected}/>
        <TodoForm
          value={this.state.task}
          submit={this.handleSubmit}
          update={this.handleChange}
        />
      </div>
    );
  }
}

export default App;