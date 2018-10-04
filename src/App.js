import React from "react"
import TodoForm from "../src/components/TodoComponents/TodoForm"
import './app.css'
import TodoList from "./components/TodoComponents/TodoList";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task:"",
      id:Date.now(),
      todos: [],
      completed: false
    }
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    
  }

  handleChange = event => {
    this.setState({
        task: event.target.value,
        id: Date.now(),
      
    });
  };

  handleSubmit = () => {
    const task = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.state.todos.push(task);
    this.setState({
      task: "",
    })
  };

  clearCompleted() {
    const li = document.querySelectorAll('.strike-th');
    li.forEach( item => item.style.display = "none");
  }



  render() {

    return (
      <div className="container">
        <TodoList taskLists={this.state.todos} />
        <TodoForm
          value={this.state.task}
          submit={this.handleSubmit}
          update={this.handleChange}
          clear={this.clearCompleted}
        
        />
      </div>
    );
  }
}

export default App