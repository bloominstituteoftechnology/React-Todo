import React from "react";
import Todo from "../src/components/TodoComponents/Todo";
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";
//import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: Date.now(),
      task:" ",
      completed: false
    };
    this.tasks = [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ];
  }
  
   handleChange = (event) => {
    this.setState({
      task:event.target.value,
      id:Date.now(),
      completed:false
    })
  }

  handleSubmit =(event)=>{
    this.tasks.push(this.state);
    event.preventDefault();
  }
  
  render() {
    return (
      <div className="App">
        <TodoList taskLists={this.tasks} />
        <Todo task={this.state.task}/>
        <TodoForm submit={this.handleSubmit} update={this.handleChange} />
      </div>
    );
  }
}


export default App;